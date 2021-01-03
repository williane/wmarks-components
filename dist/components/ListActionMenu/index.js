"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _ActionMenu = _interopRequireDefault(require("../ActionMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListActionMenu(_ref) {
  var actionMenus = _ref.actionMenus;
  return /*#__PURE__*/_react.default.createElement(_style.Wrapper, {
    length: actionMenus.length
  }, actionMenus.map(function (a, index) {
    return /*#__PURE__*/_react.default.createElement(_ActionMenu.default, {
      key: index,
      backgroundColor: a.backgroundColor,
      shadowColor: a.shadowColor,
      src: a.src,
      lBackgroundColor: a.lBackgroundColor,
      color: a.color,
      lShadowColor: a.lShadowColor,
      borderColor: a.borderColor,
      children: a.children,
      sizeHeight: a.sizeHeight,
      sizeWidth: a.sizeWidth,
      onClick: a.onClick
    });
  }));
}

var _default = ListActionMenu;
exports.default = _default;