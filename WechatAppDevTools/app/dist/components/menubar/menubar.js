"use strict";

function init() {
    var e = require("../../lib/react.js"),
        t = require("../../cssStr/cssStr.js"),
        a = require("../../stores/windowStores.js"),
        s = require("../../common/actions/actions.js"),
        i = e.createClass({
            displayName: "Menubar",
            getInitialState: function() {
                return { show: "win32" === process.platform ? {} : t.displayNone, showActions: t.displayNone, showAbout: t.displayNone }
            },
            actionsClick: function(e) {
                var a = e.target,
                    i = a.dataset,
                    r = i.type;
                r ? s[r]() : (a.setAttribute("already", !0), this.setState({ showActions: this.state.showActions === t.displayNone ? {} : t.displayNone, showAbout: t.displayNone }))
            },
            aboutClick: function(e) {
                var a = e.target,
                    i = a.dataset,
                    r = i.type;
                r ? s[r]() : (a.setAttribute("already", !0), this.setState({ showAbout: this.state.showAbout === t.displayNone ? {} : t.displayNone, showActions: t.displayNone }))
            },
            _bodyClick: function(e) {
                var a = e.target,
                    s = a.getAttribute("already");
                return s ? void a.setAttribute("already", !1) : void this.setState({ showActions: t.displayNone, showAbout: t.displayNone })
            },
            componentDidMount: function() { a.on("BODY_CLICK", this._bodyClick) },
            componentWillUnmount: function() { a.removeListener("BODY_CLICK", this._bodyClick) },
            render: function() {
                var a = this.props.project ? t.displayNone : {};
                return e.createElement("div", { className: "menubar-wrapper app-drag", style: this.state.show }, e.createElement("div", { className: "menubar" }, e.createElement("div", { onClick: this.props.showSetting, className: "menubar-item app-no-drag" }, "设置"), e.createElement("div", { className: "menubar-item app-no-drag", onClick: this.actionsClick }, "动作", e.createElement("div", { className: "menubar-item-sub", style: this.state.showActions }, e.createElement("a", { "data-type": "reload", href: "javascript:;", className: "menubar-item-sub-item" }, "刷新"), e.createElement("a", { "data-type": "goback", href: "javascript:;", className: "menubar-item-sub-item" }, "后退"), e.createElement("a", { "data-type": "goforward", href: "javascript:;", className: "menubar-item-sub-item" }, "前进"), e.createElement("a", { style: a, "data-type": "focusAddressBar", href: "javascript:;", className: "menubar-item-sub-item" }, "选中地址栏"))), e.createElement("div", { className: "menubar-item app-no-drag", onClick: this.aboutClick }, "帮助", e.createElement("div", { className: "menubar-item-sub", style: this.state.showAbout }, e.createElement("a", { "data-type": "showAbout", href: "javascript:;", className: "menubar-item-sub-item" }, "关于")))), e.createElement("div", { className: "titlebar" }, e.createElement("h1", null, "微信开发者工具 ", global.appVersion)), e.createElement("div", { className: "operation-area app-no-drag" }, e.createElement("a", { href: "javascript:;", onClick: this.props.appMin, className: "operation-item" }, e.createElement("i", { className: "operation-min-icon" })), e.createElement("a", { href: "javascript:;", onClick: this.props.appMax, className: "operation-item" }, e.createElement("i", { className: "operation-max-icon" })), e.createElement("a", { href: "javascript:;", onClick: this.props.appQuit, className: "operation-item" }, e.createElement("i", { className: "operation-close-icon" }))))
            }
        });
    _exports = i
}
var _exports;
init(), module.exports = _exports;
