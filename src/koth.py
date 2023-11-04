"""
King of the Hill

Happens every 30 mins

Object that has:
timestamp:
name:
weapon:

"""

from pathlib import Path
import sqlite3
from icecream import ic
import time
import random


class Database:
    def __init__(self, filename:str | Path, db_folder: str | Path = None) -> None:
        self.db_folder: Path = db_folder if db_folder is not None else self.get_db_folder(filename)
        self.db_path = self.db_folder.joinpath(filename).resolve()
        self.connection= sqlite3.connect(self.db_path)
    
    def table_exists(self, name: str) -> bool:
        try:
            self.connection.execute(f"SELECT * FROM {name}")
        except sqlite3.OperationalError as Error:
            if str(Error) == "no such table: koth":
                return False
        return True

    def create_table(self, name,  SQL):
        self.connection.execute(SQL)
        if not self.table_exists(name):
            raise sqlite3.OperationalError("Failed to create table with given SQL")

    def clear_table(self, table_name: str):
        self.connection.execute(f'DELETE FROM {table_name};')

    @staticmethod
    def get_db_folder(filename: str | Path) -> Path:
        filename = str(filename)
        folder = None
        for i in range(10):
            try:
                test_path = Path(f"{__file__}/{'../'*i}").resolve()
                folder_path = list(test_path.glob("./db")).pop()
                break
            except IndexError:
                continue

        if folder is None:
            folder_path = Path(f"{__file__}/../../db").resolve()
            folder_path.mkdir(exist_ok=True)
        folder = folder_path.resolve(strict=True)
        return folder
        
class KingOfTheHill:
    def __init__(self, database: Database) -> None:
        self.db: Database = database
        self.table_name = 'koth'
        if not self.db.table_exists(self.table_name):
            self.define_table()
            

    def define_table(self) -> None:
        table_SQL = f"""\
        CREATE TABLE {self.table_name}(
            timestamp   varchar(50)     NOT NULL,
            name        varchar(50)     NOT NULL,
            weapon      varchar(50)     NOT NULL,
            CONSTRAINT {self.table_name}_pk PRIMARY KEY(timestamp)
        )
        """
        self.db.create_table(self.table_name, table_SQL)
        
    def new_winner(self, name: str, weapon: str):
        self.db.connection.execute(f'INSERT INTO {self.table_name} VALUES (?, ?, ?)', (time.time_ns(), name, weapon))
        # self.db.connection.commit()

    def list_all_winner(self) -> list:
        return self.db.connection.execute(f"select * from {self.table_name}").fetchall()
    
    def clear_table(self):
        self.db.clear_table(self.table_name)

    def weapon_statistics(self) -> dict[str,int]:
        weapon_wins = dict()
        return self.db.connection.execute(f"select weapon, count(*) from {self.table_name} GROUP BY weapon").fetchall()

    
    @property
    def weapons(self) -> list[str]:
        return ['Teapot', 'Donut', 'Spoon', 'Thong']

       


def main() -> int:
    DB_PATH = Path("koth_winner.db")
    koth_db = Database(DB_PATH)
    koth = KingOfTheHill(koth_db)
    koth.clear_table()
    for i in range(10_000):
        koth.new_winner(f"Zack_{i}", random.choice(koth.weapons))
    koth.db.connection.commit()
    return 0

if __name__ == "__main__":
    raise SystemExit(main())