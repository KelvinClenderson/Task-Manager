function Button(props) {
  return (
    <button {...props} className="bg-sky-800 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
}

export default Button;
