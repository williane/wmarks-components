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
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      value = _ref.value,
      readOnly = _ref.readOnly,
      required = _ref.required,
      vertical = _ref.vertical;
  return /*#__PURE__*/_react.default.createElement(_style.Label, {
    vertical: vertical
  }, /*#__PURE__*/_react.default.createElement(_style.Content, null, label), value ? /*#__PURE__*/_react.default.createElement(_style.Input, {
    type: "text",
    placeholder: placeholder,
    onChange: onChange,
    value: value,
    readOnly: readOnly,
    required: required
  }) : /*#__PURE__*/_react.default.createElement(_style.Input, {
    type: "text",
    placeholder: placeholder,
    onChange: onChange,
    required: required
  }));
}

var _default = Field;
exports.default = _default;