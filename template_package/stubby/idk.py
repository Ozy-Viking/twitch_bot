"""
Pi what is it good for, absolutely everything.
"""

from __future__ import annotations
import math
from typing import Optional


class Pi:
    """Value of pi to set decimal value."""

    def __init__(self, number_of_decimals: int = 2) -> None:
        self.n_values: int = number_of_decimals

    def round(self, number_of_decimals: Optional[int] = None) -> Pi:
        """
        Set rounding value for pi.

        Args:
            number_of_decimals (int): Number of decimal places.

        Returns:
            Pi: self

        Raises:
            TypeError: Number of decimal places must be an integer.
        """
        if not isinstance(number_of_decimals, int):
            raise TypeError("Number of decimal places must be an integer.")
        self.n_values = number_of_decimals
        return self

    @property
    def pi(self) -> float:
        """
        pi

        Returns:
            float: Rounded to the set value of the decimal places.
        """
        return round(math.pi, self.n_values)
