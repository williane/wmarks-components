"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  ", ";\n  text-align: center;\n  margin-bottom: var(--gap-smallest);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.h1(_templateObject(), _Tools.Title, function (_ref) {
  var color = _ref.color;
  return color ? _index.palette[color] : 'var(--color-second)';
}, _Tools.TextShadow.smallest(function (_ref2) {
  var shadowColor = _ref2.shadowColor;
  return shadowColor ? _index.palette[shadowColor] : 'var(--color-first)';
}));

var _default = Title;
exports.default = _default;