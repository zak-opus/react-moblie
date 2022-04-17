import React from "react";

export default function Count() {
  let x = React.createRef();
  function show() {
    alert(x.current.value);
  }
  function clearX() {
    x.current.value = "";
  }
  return (
    <div>
      <input type="text" ref={x} />
      <button onClick={show}>获取</button>
      <button onClick={clearX}>清空</button>
    </div>
  );
}
