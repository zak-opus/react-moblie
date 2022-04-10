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
