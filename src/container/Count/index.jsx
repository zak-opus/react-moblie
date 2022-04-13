import CountUI from "../../pages/User";
import { connect } from "react-redux";
import { createIncrementAction } from "../../redux/count_action";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     jia: (value) => {
//       dispatch(createIncrementAction(value));
//     },
//   };
// };
// 如果mapDispatchToProps对象中值执行后返回是{}，connect可以自动dispatch
// connect({a},{b})(UI组件)
// a:返回普通状态对象的函数
// b:返回普通操作对象方法的函数
export default connect((state) => ({ sum: state }), {
  jia: createIncrementAction,
})(CountUI);
// export default connect(
//   (state) => ({ sum: state }),
//   mapDispatchToProps
// )(CountUI);
