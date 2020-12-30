"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  width: ", ";\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var sizeHeight = _ref.sizeHeight;
  return sizeHeight ? sizeHeight + 'rem' : '25rem';
}, function (_ref2) {
  var sizeWidth = _ref2.sizeWidth;
  return sizeWidth ? sizeWidth + 'rem' : '28rem';
});

exports.Wrapper = Wrapper;