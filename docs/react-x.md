# React

## react-dom

react.js 是 React 的核心库。react-dom 是提供与 DOM 相关的功能

## react-redux

React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）

总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

UI 组件有以下几个特征。

只负责 UI 的呈现，不带有任何业务逻辑
没有状态（即不使用this.state这个变量）
所有数据都由参数（this.props）提供
不使用任何 Redux 的 API

下面就是一个 UI 组件的例子。

const Title =
  value => <h1>{value}</h1>;

因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。

二、容器组件
容器组件的特征恰恰相反。

* 负责管理数据和业务逻辑，不负责 UI 的呈现
* 带有内部状态
* 使用 Redux 的 API

为了定义业务逻辑，需要给出下面两方面的信息。

（1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数

（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

😍参考 [http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.htmls]

## PropTypes学习

PropTypes定义为组件类自身的属性，用以定义prop的类型。在开发模式下，当提供一个不合法的值作为prop时，控制台会出现警告；在产品模式下，为了性能考虑应忽略propTypes

在15.5版本之后, 代替使用 PropTypes 直接从 React 对象这种导入方式, 安装一个新的包 prop-types 并且使用如下的方式进行导入

```js
// After (15.5)
import React from 'react';
import PropTypes from 'prop-types';
class Component extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}
Component.propTypes = {
  text: PropTypes.string.isRequired,
};

```

3.具体使用
静态属性，只能通过类名.属性名指定

```js
MyComponent.propTypes = {
  // 可以声明prop是特定的JS基本类型
  // 默认情况下这些prop都是可选的
  optionalArray:PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可以被渲染的事物：numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element.
  optionalElement: PropTypes.element,

  // 声明一个prop是某个类的实例，用到了JS的instanceof运算符
  optionalMessage: PropTypes.instanceOf(Message),

  // 用enum来限制prop只接受特定的值
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 指定的多个对象类型中的一个
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 指定类型组成的数组
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 指定类型的属性构成的对象
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 一个指定形式的对象
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 你可以用以上任何验证器链接‘isRequired’，来确保prop不为空
  requiredFunc: PropTypes.func.isRequired,

  // 不可空的任意类型
  requiredAny: PropTypes.any.isRequired,

  // 自定义验证器，如果验证失败，必须返回一个Error对象
  // 不要直接使用console.warn或者throw，这些在oneOfType中都没用
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以为arrayOf和objectOf提供一个验证器
  // 如果验证失败，它也应该返回一个Error对象
  // 在array或者object中，验证器对于每个key都会被调用The first two
  // 验证器的前两个arguments是array或者object自身以及当前的key值
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

😘// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

😀// - 直接设置默认值
TextSegment.defaultProps = {
  style: {
    alignItems: 'flex-end',
  },
  value: '',
};


```

👍参考 【https://blog.csdn.net/suwu150/article/details/79460222】

## react-router
> V4.第四版

### 如何通过js实现路由跳转

* Redirect
* import PropTypes from 'prop-types'
* withRouter -- 官方文档

😘从参考： 【https://segmentfault.com/a/1190000013912862?utm_source=tag-newest】

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

定义一个组件嘴贱大你的方式是使用js函数

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
// - 这种类型的组件称为 函数定义组件
// - 特点是更为 简洁
```

无论是使用函数或是类来申明一个组件，他决不能修改它自己的props。

- 所有的React组件必须像纯函数那样使用他们的props。
- 应用的界面是随时间动态变化的，state 可以在不违反上述规则的情况下，根据用户操作，网络响应，或者其他状态变化，是组件动态的响应并改变组件的输出

### 有状态组件

- 状态和属性十分相似，但是状态时私有的，完全受控于当前组件

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
