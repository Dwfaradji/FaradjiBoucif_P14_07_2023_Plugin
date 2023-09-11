"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Modal.css");
var _jsxRuntime = require("react/jsx-runtime");
function Modal(_ref) {
  var id = _ref.id,
    show = _ref.show,
    close = _ref.close,
    style = _ref.style,
    title = _ref.title,
    message = _ref.message;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: show === true && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal",
      id: id,
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          "data-testid": "close",
          className: "modal-close-icon",
          onClick: close,
          children: "\u24E7"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: message
        })]
      })
    })
  });
}
var _default = Modal;
exports.default = _default;