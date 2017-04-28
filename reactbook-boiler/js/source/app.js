/**
 * Created by eden_liu on 2017/4/28.
 */
'use strict'; // 總是個好主意

import React from 'react';
import ReactDOM from 'react-dom';

import Logo from "./components/Logo";

ReactDOM.render(
    <h1>
        <Logo /> Welcome to the App!
    </h1>,
    document.getElementById("app")
);