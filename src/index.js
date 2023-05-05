import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( //Used from downgrading react
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);