import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Koth from "./koth/index.jsx";
import Counter from "./counter/index.jsx";
import Slaps from "./slaps/index.jsx";
import Chase from "./chase/index.jsx";
import Testing from "/src/pages/koth/testing/index.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Koth /> },
    { path: "koth/", element: <Koth /> },
    { path: "koth/testing/", element: <Testing /> },
    { path: "counter/", element: <Counter /> },
    { path: "slaps/", element: <Slaps /> },
    { path: "chase/", element: <Chase /> },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
