import React from "react";

function Tittle(props) {
  return (
    <h1 className="text-3xl text-slate-100 font-bold text-center">
      {props.children}
    </h1>
  );
}

export default Tittle;
