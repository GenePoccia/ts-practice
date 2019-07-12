"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var productController_1 = require("./Controllers/productController");
var Server_1 = require("./Server");
var productService_1 = require("./Services/productService");
var userController_1 = require("./Controllers/userController");
var userService_1 = require("./Services/userService");
var UserRepo_1 = require("./Repositories/UserRepo");
var ProductRepo_1 = require("./Repositories/ProductRepo");
var cartController_1 = require("./Controllers/cartController");
var cartRepo_1 = require("./Repositories/cartRepo");
var cartService_1 = require("./Services/cartService");
var Registry = /** @class */ (function () {
    function Registry() {
    }
    Registry.prototype.getApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, connection, userRepo, productRepo, cartRepo, productService, userService, cartService, controller, userController, cartController, server;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority";
                        return [4 /*yield*/, mongodb_1.MongoClient.connect(url, {
                                useNewUrlParser: true
                            })];
                    case 1:
                        connection = _a.sent();
                        userRepo = new UserRepo_1.UserRepo(connection);
                        productRepo = new ProductRepo_1.ProductRepo(connection);
                        cartRepo = new cartRepo_1.CartRepo(connection);
                        productService = new productService_1.ProductService(productRepo);
                        userService = new userService_1.UserService(userRepo);
                        cartService = new cartService_1.CartService(cartRepo);
                        controller = new productController_1.ProductController(productService);
                        userController = new userController_1.UserController(userService);
                        cartController = new cartController_1.CartController(cartService);
                        server = new Server_1.Server(controller, userController, cartController);
                        return [4 /*yield*/, server.init()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, server.app];
                }
            });
        });
    };
    return Registry;
}());
exports.Registry = Registry;
