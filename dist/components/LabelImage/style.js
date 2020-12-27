"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background: ", ";\n  box-shadow: 4px 0px 0px\n    ", ";\n  border-radius: 0px 0px 10px 10px;\n  border-top: 0.3rem solid\n    ", ";\n  padding: var(--gap-small);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.section(_templateObject(), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor ? _index.palette[backgroundColor] : 'var(--color-black-third)';
}, function (_ref2) {
  var shadowColor = _ref2.shadowColor;
  return shadowColor ? _index.palette[shadowColor] : 'var(--color-second)';
}, function (_ref3) {
  var borderColor = _ref3.borderColor;
  return borderColor ? _index.palette[borderColor] : 'var(--color-second)';
});

exports.Wrapper = Wrapper;

var Text = _styledComponents.default.h2(_templateObject2(), _Tools.Subtitle, function (_ref4) {
  var color = _ref4.color;
  return color ? _index.palette[color] : 'var(--color-second)';
});

exports.Text = Text;