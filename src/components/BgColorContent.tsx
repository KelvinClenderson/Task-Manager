import React from "react";

function BgContent(props) {
  return (
    <div
      className="w-screen h-screen bg-sky-900
    flex justify-center p-16"
    >
      {props.children}
    </div>
  );
}

export default BgContent;
