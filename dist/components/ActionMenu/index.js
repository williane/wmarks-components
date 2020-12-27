"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _Container = _interopRequireDefault(require("../Container"));

var _Image = _interopRequireDefault(require("../Image"));

var _LabelImage = _interopRequireDefault(require("../LabelImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionMenu(_ref) {
  var backgroundColor = _ref.backgroundColor,
      shadowColor = _ref.shadowColor,
      src = _ref.src,
      lBackgroundColor = _ref.lBackgroundColor,
      color = _ref.color,
      lShadowColor = _ref.lShadowColor,
      children = _ref.children,
      borderColor = _ref.borderColor;
  return /*#__PURE__*/_react.default.createElement(_style.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Container.default, {
    backgroundColor: backgroundColor,
    shadowColor: shadowColor
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: src
  })), /*#__PURE__*/_react.default.createElement(_LabelImage.default, {
    backgroundColor: lBackgroundColor,
    color: color,
    shadowColor: lShadowColor,
    borderColor: borderColor
  }, children));
}

var _default = ActionMenu;
exports.default = _default;