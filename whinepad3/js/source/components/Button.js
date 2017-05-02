/**
 * Created by eden90267 on 2017/4/29.
 */
/* @flow */

import classNames from 'classnames';
import React from 'react';

type Props = {
    href?: string,
    className?: string,
};

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

const Button = (props: Props) =>
    props.href
        ? <a {...props} className={classNames('Button', props.className)}/>
        : <button {...props} className={classNames('Button', props.className)}/>;

// ES2015類別語法或函式元件，必須將propTypes之類的特性定義成靜態特性，就在元件的定義之後
// Button.propTypes = {
//     href: PropTypes.string,
// };

export default Button
