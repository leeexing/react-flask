# React

## react-dom

react.js 是 React 的核心库。react-dom 是提供与 DOM 相关的功能


## react-router
> V4.第四版

### 和 react-router-dom 作比较

写法1:

import {Swtich, Route, Router, HashHistory, Link} from 'react-router-dom';

写法2:

import {Switch, Route, Router} from 'react-router';
import {HashHistory, Link} from 'react-router-dom';

先简单说下各自的功能：

react-router: 实现了路由的核心功能
react-router-dom: 基于react-router，加入了在浏览器运行环境下的一些功能，例如：Link组件，会渲染一个a标签，Link组件源码a标签行; BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由。

react-router-native: 基于react-router，类似react-router-dom，加入了react-native运行环境下的一些功能。

从源码层面来说明：

首先看react-router-dom中的Switch组件的源码

// Written in this round about way for babel-transform-imports
import { Switch } from 'react-router'
export default Switch
只是从react-router中导入Switch组件，然后重新导出而已。

结论：

react-router-dom依赖react-router，
所以我们使用npm安装依赖的时候，只需要安装相应环境下的库即可，不用再显式安装react-router。
基于浏览器环境的开发，只需要安装react-router-dom；
基于react-native环境的开发，只需要安装react-router-native。
npm会自动解析react-router-dom包中package.json的依赖并安装。

react-router-dom中package.json依赖:

"dependencies": {
    "history": "^4.7.2",
    "invariant": "^2.2.2",
    "loose-envify": "^1.3.1",
    "prop-types": "^15.5.4",
    "react-router": "^4.2.0",
    "warning": "^3.0.0"
  }
安装了react-router-dom，npm会解析并安装上述依赖包。可以看到，其中包括react-router。


## redux


## 敲代码学习

### 组件
React 组件使用一个名为 render() 的方法，接收数据作为输入，输出页面中对应展示的内容

组件从概念上看就像是函数，他可以接收任意的输入值（称之为 props ），并返回一个需要在页面上展示的 React 元素

无论是使用函数或是类来申明一个组件，他决不能修改它自己的props。

-所有的React组件必须像纯函数那样使用他们的props。

### 有状态组件
处理使用外部传入的数据以外（通过 this.props 访问传入数据），组件还可以拥有其他内部的状态数据（通过 this.state 访问二状态数据）。当组建的状态数据改变时，组件会调用 render() 方法重新渲染

如何传递 props 到基础构造函数的

```js
constructor (props) {
  super(props)
  this.state ={
    date: Date.now()
  }
}

```

### 应用
使用 props 和 state

### 正确地使用状态
- 不要直接更新状态
- 状态更新可能是异步的
- 状态更新合并
