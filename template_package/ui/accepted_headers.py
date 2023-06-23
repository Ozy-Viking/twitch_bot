"""
accepted_headers.py

All of the following section headers are supported:
    Args (alias of Parameters)
    Arguments (alias of Parameters)
    Attention
    Attributes
    Caution
    Danger
    Error
    Example
    Examples
    Hint
    Important
    Keyword Args (alias of Keyword Arguments)
    Keyword Arguments
    Methods
    Note
    Notes
    Other Parameters
    Parameters
    Return (alias of Returns)
    Returns
    Raise (alias of Raises)
    Raises
    References
    See Also
    Tip
    Todo
    Warning
    Warnings (alias of Warning)
    Warn (alias of Warns)
    Warns
    Yield (alias of Yields)
    Yields

Author: Zack Hankin
Started: 24/02/2023
"""
from __future__ import annotations


class NumberError(TypeError):
    """
    Invalid type for Number class.
    """

    pass


class Number:
    """Number

    A representation of a number.

    Attributes:
        x (int | float): Value of the object.

    Raises:
        NumberError: X must be a valid number.
    """

    def __init__(self, x: int | float) -> None:
        if not isinstance(x, Number | int | float):
            raise NumberError("Not a valid number.")
        if isinstance(x, Number):
            x = x.x
        self.x: int | float = x

    def __pow__(
        self,
        power: int | float | Number,
        modulo: int | float | Number | None = None,
    ) -> Number:
        """
        Takes x to the power of power moduls modulo.
        Then puts value into a Number class form.

        Args:
            power (int | float | Number): Value for self.x to be raised to.
            modulo (int | float | Number | None): Modulus. Default is None.

        Returns:
            Number: Returns a new instance of Number with x being the result.
        """
        if isinstance(power, type(self)):
            power = power.x
        if isinstance(modulo, type(self)):
            modulo = modulo.x
        if modulo is None:
            return Number(self.x**power)
        if (not isinstance(modulo, int)) and (modulo is not None):
            modulo = int(round(modulo))
        return Number((self.x**power) % modulo)

    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.x == other.x
        elif isinstance(other, int | float):
            return self.x == other
        else:
            return NotImplemented
