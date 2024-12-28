import React from "react";

function Bg(props) {
  return (
    <div
      className=" bg-sky-900
    flex justify-center p-16 h-full w-full"
    >
      {props.children}
    </div>
  );
}

export default Bg;
