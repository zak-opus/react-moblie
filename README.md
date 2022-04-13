### 一、概述

本项目基于 `react@17.0.2、react-router-dom@6.3.0、react-scripts@4.0.3` ，移动端 web 适配练习项目。

### 二、步骤

- 选择社区解决方案`craco`，配置组件库和移动端适配；
- 重置样式，直接放在`public/css`中；
- 安装路由`react-router-dom`，并配置`/config/routes.js`

### 三、常用命令

### `npm start`or `yarn start`

### `npm test`

### `npm run build`

### `npm run eject`

**注意:react 社区方案如`@craco/craco`,只能使用 yarn 安装,所以本项目使用 yarn**

### 四、笔记

#### 1、redux

redux 就是用于存放一些公用的变量，让组件们可以访问与操作；
action、reducer:都用于操作公共变量，前者用于组件进行操作，后者用于对操作进行执行；一个 reducer 维护一个公共变量；

```js
//action
export const createIncrementAction =(value)=>{return {type:data}}
//reducer
export default function countReducer(preState = 0, action){return ...}
//store
const store = createStore(countReducer, applyMiddleware(thunk));
// 多个reducer时,以对象形式传入
import { createStore, applyMiddleware,combineReducers } from "redux";
const allReducer = combineReducers({count:countReducer})
const store = createStore(allReducer, applyMiddleware(thunk));
```

``

#### 2、react-redux

react-redux：用于让 redux 脱离组件本身，通过容器`connect(mapStateToProps,mapDispatchToProps)(UI组件)`，连接组件与 redux;
`import { connect } from "react-redux";`
`import { Provider } from "react-redux";`

- mapStateToProps 函数:参数`state`，返回对象，键名供组件使用来使用 state；

```js
(state) => ({ sum: state });
```

- mapDispatchToProps 函数：参数`dispatch`,返回对象，键名供组件使用来操作 state；

```js
(dispatch) => {
   return {
     jia: (value) => {
       dispatch(createIncrementAction(value));
     },
   };
```
