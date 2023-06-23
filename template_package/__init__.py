"""
Template Package
"""
from .__main__ import __doc__ as subdoc
from .__main__ import square, main
from .stubby import Pi

__doc__ += subdoc
__all__: list[str] = ["square", "main", "Pi"]
