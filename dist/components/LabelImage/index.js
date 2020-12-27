"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LabelImage(_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      shadowColor = _ref.shadowColor,
      children = _ref.children,
      borderColor = _ref.borderColor;
  return /*#__PURE__*/_react.default.createElement(_style.Wrapper, {
    backgroundColor: backgroundColor,
    shadowColor: shadowColor,
    borderColor: borderColor
  }, /*#__PURE__*/_react.default.createElement(_style.Text, {
    color: color
  }, children));
}

var _default = LabelImage;
exports.default = _default;