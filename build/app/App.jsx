"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var UnconnectedApp = /** @class */ (function (_super) {
    __extends(UnconnectedApp, _super);
    function UnconnectedApp(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            fetch("http://localhost:4000/planter")
                .then(function (x) {
                return x.text();
            })
                .then(function (responseBody) {
                var body = JSON.parse(responseBody);
                _this.props.dispatch({
                    type: "load-planters",
                    planters: body.results,
                });
            });
        };
        _this.renderRoot = function () {
            return <div>hello world</div>;
        };
        _this.renderPlanters = function () {
            return <div> planters go here </div>;
        };
        _this.render = function () {
            return <div>
            <react_router_dom_1.Route exact={true} path="/" render={_this.renderRoot}/>
            <react_router_dom_1.Route exact={true} path="/planters" render={_this.renderPlanters}/>
            </div>;
        };
        return _this;
    }
    return UnconnectedApp;
}(react_1.Component));
var mapStateToProps = function (state) {
    return { planters: state.planters };
};
var App = react_redux_1.connect(mapStateToProps)(UnconnectedApp);
exports.default = App;
