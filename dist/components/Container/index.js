"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  box-sizing: border-box;\n  height: 20rem;\n  width: 100%;\n  background: ", ";\n  box-shadow: 4px 0px 0px\n    ", ";\n  border-radius: 10px 10px 0px 0px;\n  padding: var(--gap-smallest);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor ? _index.palette[backgroundColor] : 'var(--color-black-third)';
}, function (_ref2) {
  var shadowColor = _ref2.shadowColor;
  return shadowColor ? _index.palette[shadowColor] : 'var(--color-second)';
});

var _default = Container;
exports.default = _default;