import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card w-[18rem] bg-blue-800 flex">
      <figure>
        <img src={props.image} alt={props.alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="text-start">{props.text}</p>
        <div className="card-actions justify-end">
          <Button text={props.btnText} />
        </div>
      </div>
    </div>
  );
};

export default Card;
