"""
Init for ui.

"""
from .accepted_headers import __doc__ as subdoc
from .accepted_headers import NumberError, Number

__doc__ += subdoc

__all__: list[str] = ["Number", "NumberError"]
