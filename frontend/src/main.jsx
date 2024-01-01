import React from "react";
import ReactDOM from "react-dom/client";
import "/src/stylesheets/index.css";

// @ts-ignore
import Router from "/src/pages/router.jsx";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
