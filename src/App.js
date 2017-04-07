"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/components/Button");
var Checkbox_1 = require("office-ui-fabric-react/lib/components/Checkbox");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { label: 'test' }),
            React.createElement(Checkbox_1.Checkbox, null)));
    };
    return App;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map