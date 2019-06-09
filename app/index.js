"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
var store_1 = require("./store");
var react_router_dom_1 = require("react-router-dom");
react_dom_1["default"].render(<react_redux_1.Provider store={store_1["default"]}>
    <react_router_dom_1.BrowserRouter>
    <App_1["default"] />
    </react_router_dom_1.BrowserRouter>
</react_redux_1.Provider>, document.getElementById('root'));
