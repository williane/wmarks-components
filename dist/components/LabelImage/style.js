"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Wrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _index = require("../../index");

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  font-size: 1.3rem;\n  color: ", ";\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 20%;\n  background: ", ";\n  box-shadow: 4px 4px 0px\n    ", ";\n  border-radius: 0px 0px 10px 10px;\n  border-top: 0.3rem solid\n    ", ";\n  padding: var(--gap-small);\n"]);

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