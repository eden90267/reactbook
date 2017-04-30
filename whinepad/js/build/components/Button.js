'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by eden90267 on 2017/4/29.
                                                                                                                                                                                                                                                                   */


var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const PropTypes

// function Button(props) {
//     const cssclasses = classNames('Button', props.className);
//     //
//     // <div className={classNames({ // classname可按照特定條件設定類別名稱
//     //     'mine': true, // 無條件
//     //     'highlighted': this.state.active, // 根據元件狀態
//     //     'hidden': this.props.hide, // ...或特性
//     // })} />
//     //
//     return props.href
//         ? <a {...props} className={cssclasses}/>
//         : <button {...props} className={cssclasses}/>
// }

var Button = function Button(props) {
    return props.href ? _react2.default.createElement('a', _extends({}, props, { className: (0, _classnames2.default)('Button', props.className) })) : _react2.default.createElement('button', _extends({}, props, { className: (0, _classnames2.default)('Button', props.className) }));
};

// ES2015類別語法或函式元件，必須將propTypes之類的特性定義成靜態特性，就在元件的定義之後
Button.propTypes = {
    href: _react.PropTypes.string
};

exports.default = Button;