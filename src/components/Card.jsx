import React from "react";

const Card = (props) => {
  return (
    <div className="card w-[16rem] bg-blue-800">
      <figure>
        <img src={props.image} alt={props.alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="text-start">{props.text}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-[#3F979B] border-none">
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
