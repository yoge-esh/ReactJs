import React from "react";
import './index.css'

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" />
          <div className="card__info">
            <span className="card__catagory">{props.title}</span>
            <h3 className="card__title">{props.Name}</h3>
            <a href={props.link} target={"_blank"} rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
