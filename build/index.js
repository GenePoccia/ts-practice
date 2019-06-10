"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = require("./registry");
var app = new registry_1.Registry();
app.getApp().then(function (server) {
    server.listen(4123, function () {
        console.log('Its working');
    });
});
