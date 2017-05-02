/**
 * Created by eden90267 on 2017/5/1.
 */
jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-dom/test-utils';

const Excel = require('../source/components/Excel').default;
const schema = require('../source/schema').default;

let data = [{}];
schema.forEach(item => data[0][item.id] = item.sample);

describe('Editing data', () => {
    it('saves new data', () => {
        /* .. 渲染、互動、檢視 */
        const callback = jest.genMockFunction();
        const table = TestUtils.renderIntoDocument(
            <Excel
                schema={schema}
                initialData={data}
                onDataChange={callback}/>
        );
        const newname = '$2.99 chunk';
        const cell = TestUtils.scryRenderedDOMComponentsWithTag(table, 'td')[0];
        cell.dataset = { // 需要一點小技巧才能支援資料集，調整一下 Jest 的 DOM 支援
            row: cell.getAttribute('data-row'),
            key: cell.getAttribute('data-key'),
        };
        TestUtils.Simulate.doubleClick(cell);
        cell.getElementsByTagName('input')[0].value = newname;
        TestUtils.Simulate.submit(cell.getElementsByTagName('form')[0]);

        expect(cell.textContent).toBe(newname);
        expect(callback.mock.calls[0][0][0].name).toBe(newname);
    });
    it('deletes data', () => {
        const callback = jest.genMockFunction();
        const table = TestUtils.renderIntoDocument(
            <Excel
                schema={schema}
                initialData={data}
                onDataChange={callback}/>
        );

        TestUtils.Simulate.click( // x icon
            TestUtils.findRenderedDOMComponentWithClass(table, 'ActionsDelete')
        );

        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithClass(table, 'Button')
        );

        // console.log(callback.mock.calls);
        expect(callback.mock.calls[0][0].length).toBe(0); // 互動之後的新資料陣列，一個都不剩了，因刪除了唯一一筆紀錄。
    });
});
