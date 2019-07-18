//react imports
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//component imports
import App from "../components/App.jsx";
import store from "../store/store.js";
import Routes from '../components/Routes/Routes.jsx'
//css imports
import '../css/homepage.css'

ReactDom.render(<Provider store={store}>
    <BrowserRouter>
    <App /><Routes />
    </BrowserRouter>
</Provider>, document.getElementById("root"));
