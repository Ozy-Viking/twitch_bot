"""
Main Module

Author: Zack Hankin

Started: 23/02/2023
"""
from __future__ import annotations

from .ui import Number


def square(x: Number | int | float) -> Number:
    """
    Squares the given number.

    Args:
        x (Number): A real positive or negative number.

    Returns:
        Number: The square of the given number.

    Raises:
        TypeError: If the given number is not a number.
    """
    if isinstance(x, int | float):
        x = Number(x)
    return Number(pow(x, 2))


def main() -> int:
    """
    The main function for the module.

    Squares the first 50 integer numbers.

    Returns:
        int: Exit code
    """
    for idx in range(50):
        square(Number(idx))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
