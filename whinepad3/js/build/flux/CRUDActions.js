'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CRUDStore = require('./CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUDActions = {
    create: function create(newRecord) {
        _CRUDStore2.default.setData(_CRUDStore2.default.getData().unshift(newRecord));
    },
    delete: function _delete(recordId) {
        _CRUDStore2.default.setData(_CRUDStore2.default.getData().remove(recordId));
    },
    updateRecord: function updateRecord(recordId, newRecord) {
        _CRUDStore2.default.setData(_CRUDStore2.default.getData().set(recordId, newRecord));
    },
    updateField: function updateField(recordId, key, value) {
        var record = _CRUDStore2.default.getData().get(recordId);
        record[key] = value;
        _CRUDStore2.default.setData(_CRUDStore2.default.getData().set(recordId, record));
    },


    _preSearchData: null,

    startSearching: function startSearching() {
        this._preSearchData = _CRUDStore2.default.getData();
    },
    search: function search(e) {
        var target = e.target;
        var needle = target.value.toLowerCase();
        if (!needle) {
            _CRUDStore2.default.setData(this._preSearchData);
            return;
        }
        var fields = _CRUDStore2.default.getSchema().map(function (item) {
            return item.id;
        });
        if (!this._preSearchData) {
            return;
        }
        var searchdata = this._preSearchData.filter(function (row) {
            for (var f = 0; f < fields.length; f++) {
                if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
                    return true;
                }
            }
            return false;
        });
        _CRUDStore2.default.setData(searchdata);
    },
    _sortCallback: function _sortCallback(a, b, descending) {
        var res = 0;
        if (typeof a === 'number' && typeof b === 'number') {
            res = a - b;
        } else {
            res = String(a).localeCompare(String(b));
        }
        return descending ? -1 * res : res;
    },
    sort: function sort(key, descending) {
        var _this = this;

        _CRUDStore2.default.setData(_CRUDStore2.default.getData().sort(function (a, b) {
            return _this._sortCallback(a[key], b[key], descending);
        }));
    }
}; /**
    * Created by eden90267 on 2017/5/1.
    */


exports.default = CRUDActions;