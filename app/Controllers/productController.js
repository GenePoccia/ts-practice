"use strict";
exports.__esModule = true;
var ProductController = /** @class */ (function () {
    function ProductController(service) {
        this.service = service;
    }
    ProductController.prototype.getMany = function () {
        return this.service.getProducts();
    };
    return ProductController;
}());
exports.ProductController = ProductController;
