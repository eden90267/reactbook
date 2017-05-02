/**
 * Created by eden_liu on 2017/4/28.
 */
/* @flow */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import CRUDStore from './flux/CRUDStore';

import Logo from './components/Logo';
import Whinepad from './components/Whinepad';
import schema from './schema';

CRUDStore.init(schema);

ReactDOM.render(
    <div>
        <div className="app-header">
            <Logo/> Welcome to Whinepad!
        </div>
        <Whinepad />
    </div>,
    document.getElementById('pad')
);
