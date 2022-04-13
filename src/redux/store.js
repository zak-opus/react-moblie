// applyMiddleware用于让redux支持异步操作
// 默认action只能返回一个普通对象
// 使用中间件，让action中方法返回函数时，可以被自动执行，并传入dispatch
import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import thunk from "redux-thunk";
const store = createStore(countReducer, applyMiddleware(thunk));
export default store;
