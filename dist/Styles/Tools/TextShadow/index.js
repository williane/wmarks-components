"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextShadow = void 0;

var _styledComponents = require("styled-components");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: 0px 0.25rem 0px ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: 1rem 1rem 0px var(--color-black-first);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: 0.5rem 0.5rem 0px var(--color-black-first);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var small = (0, _styledComponents.css)(_templateObject());
var medium = (0, _styledComponents.css)(_templateObject2());

var smallest = function smallest(color) {
  return (0, _styledComponents.css)(_templateObject3(), color);
};

var TextShadow = {
  small: small,
  medium: medium,
  smallest: smallest
};
exports.TextShadow = TextShadow;