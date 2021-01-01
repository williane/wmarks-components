"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _index = require("../../Styles/Tools/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: var(--color-first);\n  ", ";\n  padding: var(--gap-small);\n  color: var(--color-third);\n  text-decoration: none;\n  text-align: center;\n\n  &:hover {\n    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    padding: var(--gap-smallest);\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 4px 4px 4px ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 5px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 4px 4px ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColor = function changeColor(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor;
  return (0, _styledComponents.css)(_templateObject(), _palette.palette[color], _palette.palette[backgroundColor]);
};

var hasBorder = function hasBorder(_ref2) {
  var borderColor = _ref2.borderColor;
  return borderColor && (0, _styledComponents.css)(_templateObject2(), _palette.palette[borderColor]);
};

var shadowBox = function shadowBox(_ref3) {
  var shadowColor = _ref3.shadowColor;
  return shadowColor && (0, _styledComponents.css)(_templateObject3(), _palette.palette[shadowColor]);
};

var hasBorderRadius = function hasBorderRadius(_ref4) {
  var borderRadius = _ref4.borderRadius;
  return borderRadius && (0, _styledComponents.css)(_templateObject4());
};

var hasBlur = function hasBlur(_ref5) {
  var blur = _ref5.blur,
      shadowColor = _ref5.shadowColor;
  return blur && (0, _styledComponents.css)(_templateObject5(), _palette.palette[shadowColor]);
};

var hasMedium = function hasMedium(_ref6) {
  var medium = _ref6.medium;
  return medium && (0, _styledComponents.css)(_templateObject6(), _index.Subtitle);
};

var hasSmall = function hasSmall(_ref7) {
  var small = _ref7.small;
  return small && (0, _styledComponents.css)(_templateObject7(), _index.Body2);
};

var Button = _styledComponents.default.button(_templateObject8(), _index.Title, hasBorder, hasBorderRadius, shadowBox, hasBlur, changeColor, hasMedium, hasSmall);

var _default = Button;
exports.default = _default;