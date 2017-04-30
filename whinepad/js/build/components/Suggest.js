"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by eden90267 on 2017/4/29.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Suggest = function (_Component) {
    _inherits(Suggest, _Component);

    function Suggest() {
        _classCallCheck(this, Suggest);

        return _possibleConstructorReturn(this, (Suggest.__proto__ || Object.getPrototypeOf(Suggest)).apply(this, arguments));
    }

    _createClass(Suggest, [{
        key: "getValue",
        value: function getValue() {
            return this.refs.lowlevelinput.value;
        }
    }, {
        key: "render",
        value: function render() {
            var randomid = Math.random().toString(16).substring(2);
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", {
                    list: randomid,
                    defaultValue: this.props.defaultValue,
                    ref: "lowlevelinput",
                    id: this.props.id }),
                _react2.default.createElement(
                    "datalist",
                    { id: randomid },
                    this.props.options.map(function (item, idx) {
                        return _react2.default.createElement("option", { value: item, key: idx });
                    })
                )
            );
        }
    }]);

    return Suggest;
}(_react.Component);

Suggest.propTypes = {
    options: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

exports.default = Suggest;