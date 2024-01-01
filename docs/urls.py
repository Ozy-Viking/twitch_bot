from django.urls import path, re_path
from docs.views import index, assets

from django.conf import settings

urlpatterns = [
    re_path(r"(?P<path>[a-zA-Z0-9]*)?(?:\.html)?$", index),
    # re_path()
]


urlpatterns += assets("assets/", document_root=settings.DOCS_STATIC_ROOT)
urlpatterns += assets("search/", document_root=settings.DOCS_SEARCH_ROOT)
