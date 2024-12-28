import React from "react";

function Bg(props) {
  return (
    <div
      className="w-screen h-screen bg-sky-900
    flex justify-center p-16"
    >
      {props.children}
    </div>
  );
}

export default Bg;
