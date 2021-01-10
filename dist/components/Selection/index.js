"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection(_ref) {
  var label = _ref.label,
      values = _ref.values,
      vertical = _ref.vertical;
  return /*#__PURE__*/_react.default.createElement(_style.Label, {
    vertical: vertical
  }, /*#__PURE__*/_react.default.createElement(_style.Content, null, label), /*#__PURE__*/_react.default.createElement(_style.Select, null, values.map(function (value) {
    return /*#__PURE__*/_react.default.createElement(_style.Options, {
      key: 'id_' + value,
      value: value
    }, value);
  })));
}

var _default = Selection;
exports.default = _default;