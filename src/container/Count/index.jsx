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
// 如果返回{}，connect可以自动dispatch
export default connect((state) => ({ sum: state }), {
  jia: createIncrementAction,
})(CountUI);
// export default connect(
//   (state) => ({ sum: state }),
//   mapDispatchToProps
// )(CountUI);
