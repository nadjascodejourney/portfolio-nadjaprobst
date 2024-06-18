import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Leva } from "leva";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Leva />{" "}
    {/* add the Leva Component here, if there is an error in the console (it used to be, but nowadays usually the error is gone) */}
    <App />
  </React.StrictMode>
);
