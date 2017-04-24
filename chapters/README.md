# chap01：Hello World

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello React</title>
</head>
<body>
    <div id="app">
        <!-- 我的應用程式在此渲染 -->
    </div>
    <script src="react/build/react.js"></script>
    <script src="react/build/react-dom.js"></script>
    <script>
        // 我的應用程式的程式碼
        ReactDOM.render(
            React.DOM.h1(null, "Hello World!"),
            document.getElementById("app")
        );
    </script>
</body>
</html>
```

## 發生什麼事？

React物件被使用，所有可供利用的API都是透過這個物件提供，事實上，這個API刻意被極小化，因此沒有很多方法名稱需記憶。

ReactDOM物件，它的方法更是屈指可數，render()是其中最有用的