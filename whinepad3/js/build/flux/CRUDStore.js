'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fbemitter = require('fbemitter');

var _immutable = require('immutable');

/**
 * Created by eden90267 on 2017/5/1.
 */
var data = void 0;
var schema = void 0;
var emitter = new _fbemitter.EventEmitter();

var CRUDStore = {
    init: function init(initialSchema) {
        schema = initialSchema;
        var storage = 'localStorage' in window ? localStorage.getItem('data') : null;
        if (!storage) {
            var initialRecord = {};
            schema.forEach(function (item) {
                return initialRecord[item.id] = item.sample;
            });
            data = (0, _immutable.List)([initialRecord]);
        } else {
            data = (0, _immutable.List)(JSON.parse(storage));
        }
    },
    getData: function getData() {
        return data;
    },
    setData: function setData(newData) {
        var commit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        data = newData;
        if (commit && 'localStorage' in window) {
            localStorage.setItem('data', JSON.stringify(newData));
        }
        emitter.emit('change');
    },
    getSchema: function getSchema() {
        return schema;
    },
    getCount: function getCount() {
        return data.count(); // 'data.size'也可以
    },
    getRecord: function getRecord(recordId) {
        return data.get(recordId);
    },
    addListener: function addListener(eventType, fn) {
        emitter.addListener(eventType, fn);
    }
};

exports.default = CRUDStore;