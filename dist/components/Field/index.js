"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Field(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/_react.default.createElement(_style.Label, null, /*#__PURE__*/_react.default.createElement(_style.Content, null, label), /*#__PURE__*/_react.default.createElement(_style.Input, {
    type: "text",
    placeholder: placeholder
  }));
}

var _default = Field;
exports.default = _default;