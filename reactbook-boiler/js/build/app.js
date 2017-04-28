/**
 * Created by eden_liu on 2017/4/28.
 */
'use strict'; // 總是個好主意

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    _react2.default.createElement(_Logo2.default, null),
    ' Welcome to the App!'
), document.getElementById("app"));