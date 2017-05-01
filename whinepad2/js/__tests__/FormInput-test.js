/**
 * Created by eden90267 on 2017/5/1.
 */
jest
    .dontMock('../source/components/FormInput')
    .dontMock('../source/components/Rating')
    .dontMock('../source/components/Suggest')
    .dontMock('classnames');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

const FormInput = require('../source/components/FormInput').default;

describe('factory works', () => {
    it('returns input value', () =>{
        let input = TestUtils.renderIntoDocument(<FormInput type="year"/>);
        expect(input.getValue()).toBe(String(new Date().getFullYear()));
        input = TestUtils.renderIntoDocument(<FormInput type="rating" defaultValue={3}/>);
        expect(input.getValue()).toBe(3);
    });
});