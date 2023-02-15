import React from "react";

const Button = (props) => {
  return (
    <button class="btn btn-outline text-white border-none bg-[#0D3B72]">
      {props.text}
    </button>
  );
};

export default Button;
