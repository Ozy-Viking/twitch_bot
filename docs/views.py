from django.shortcuts import render
from django.urls import re_path
from icecream import ic
from django.views.static import serve

import re


# Create your views here.
def index(request, path):
    ic(path)
    if path == "":
        path = "index"
    template_name = f"docs/{path}"
    if not template_name.endswith(".html"):
        template_name += ".html"

    ic(template_name)
    return render(request=request, template_name=template_name)


def assets(prefix, view=serve, **kwargs):
    return [
        re_path(
            r"^%s(?P<path>.*)$" % re.escape(prefix.lstrip("/")), view, kwargs=kwargs
        ),
    ]
