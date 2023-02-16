import React from "react";

const Button = (props) => {
  return (
    <button className="btn btn-outline text-white border-none hover:text-white bg-[#0F6292] hover:bg-[#46b96b]">
      {props.text}
    </button>
  );
};

export default Button;
