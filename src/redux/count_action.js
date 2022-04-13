// action就是一些用于操作redux的函数，可以返回普通对象（同步），也可以返回函数（异步，需要redux-thunk）
// 供UI组件或容器使用
import { INCREMENT } from "./constant";
export const createIncrementAction = (value) => {
  return { type: INCREMENT, data: value };
};
export const createIncrementAsyncAction = (value,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(value));
    }, time);
  };
};
