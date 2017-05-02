/**
 * Created by eden90267 on 2017/5/1.
 */
/* @flow */

import {EventEmitter} from 'fbemitter';

let data;
let schema;
const emitter = new EventEmitter();

const CRUDStore = {
    init(initialSchema: Array<Object>) {
        schema = initialSchema;
        const storage = 'localStorage' in window
            ? localStorage.getItem('data')
            : null;
        if (!storage) {
            data = [{}];
            schema.forEach(item => data[0][item.id] = item.sample);
        } else {
            data = JSON.parse(storage);
        }
    },
    getData(): Array<Object> {
        return data;
    },
    setDate(newData: Array<Object>, commit: boolean = true) {
        data = newData;
        if (commit && 'localStorage' in window) {
            localStorage.setItem('data', JSON.stringify(newData));
        }
        emitter.emit('change');
    },
    getSchema(): Array<Object> {
        return schema;
    },
    getCount(): number {
        return data.length;
    },
    getRecord(recordId: number): ?Object {
        return recordId in data ? data[recordId] : null;
    },
    addListener(eventType: string, fn: Function) {
        emitter.addListener(eventType, fn);
    },
};

export default CRUDStore;
