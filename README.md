# chap06：建置應用程式

## 元件

### 無狀態的函式元件

```
import classNames from 'classnames';
import React, {PropTypes} from 'react'; // const PropTypes

function Button(props) {
    const cssclasses = classNames('Button', props.className);
    return props.href
        ? <a {...props} className={cssclasses}/>
        : <button {...props} className={cssclasses}/>
}

Button.propTypes = {
    href: PropTypes.string,
};

export default Button
```

當元件不需要保存狀態時，你可使用函式來定義它，函式的主體就是你的render()方法的替代品，這個函式接受所有的特性作為第一個引數 —— 那就是你在本體內為什麼使用`props.href`，而不是用`this.props.href`的類別 / 物件版本的原因。

可利用箭頭函式：

```
const Button = props => {
    // ...
};
```

```
const Button = props =>
    props.href
        ? <a {...props} className={classNames('Button', props.className)}/>
        : <button {...props} className={classNames('Button', props.className)}/>;
```

### propTypes

ES2015類別語法或函式元件，必須將propTypes之類的特性定義成靜態特性，就在元件的定義之後：

```
import React, {Component, PropTypes} from 'react';

class Button extends Component {
    render() {
        /* 渲染 */
    }
}

Button.propTypes = {
    href: PropTypes.string,
};
```

### ref

```
import React, {Component, PropTypes} from 'react';

class Suggest extends Component {

    getValue() {
        return this.refs.lowlevelinput.value;
    }

    render() {
        const randomid = Math.random().toString(16).substring(2);
        return (
            <div>
                <input
                    list={randomid}
                    defaultValue={this.props.defaultValue}
                    ref="lowlevelinput"
                    id={this.props.id}/>
                <datalist id={randomid}>{
                    this.props.options.map((item, idx) =>
                        <option value={item} key={idx}/>
                    )
                }</datalist>
            </div>
        );
    }
}

Suggest.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
};

export default Suggest
```

考慮：

```
<input ref="domelement" id="hello">
/* 稍後... */
console.log(this.refs.domelement.id === 'hello'); // true
```

ref屬性允許你命名React元件的特定實例，並於稍後**參照**或**引用**。你可將ref添加到任何元件，但它通常被用來**參照底層的DOM元素**，基本上，使用ref只是一種變通做法，可能可以透過其他方式來做這件事。

前述案例中，可改用this.state來追蹤紀錄：

```
class Suggest extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.defaultValue};
    }
    
    getValue() {
        return this.state.value;
    }
    
    render() {
    }
}
```

於是，`<input>`不再需要ref，但需要onChange處理器來更新狀態：

```
<input
    list={randomid}
    defaultValue={this.props.defaultValue}
    onChange={e => this.setState({value: e.target.value})}
    id={this.props.id}/>
```

注意，`this.state = {};`在constructor()裡頭被使用：代替你在ES6之前使用getInitialState()。

# chap08：Flux

這是元件溝通管理的替代機制，以及應用程式整體資料流管理的良好做法。

傳遞特性若傳遞太多，會很難測試這個元件，並且驗證這些特性的所有排列組合——如預期運作。

傳遞特性太多層，產生重複性，且對閱讀程式碼增添精神負擔。

Flux不是程式庫，比較像是一種組織或架構應用程式資料的觀念。畢竟，多數情況下，資料是最重要的。讓使用者在任何情況下，都不應該讓他們對資料狀態感到困惑(我到底付30美元沒？)。

## 基本想法

資料被包含在Store(儲存機制)中，你的React元件(View，視圖)從Store讀取資料，並且渲染它，接著，應用程式的使用者到來，執行Action(動作，例如：點擊按鈕)。Action促使Store裡的資料更新，從而影響View，依此方式循環運作，資料**單向流動**，使得它比較容易追蹤，推想，及偵錯。

這個一般化概念還有其他變形與擴充，包括多個Action，多個Store，以及Dispatcher(分派器)。