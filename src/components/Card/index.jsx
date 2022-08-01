import React, { useEffect, useState } from "react";
import "./styles.scss";

const Card = () => {
  window.addEventListener("resize", () => {
    changeHover(window.innerWidth, screen.width);
  });

  const [numberAd, setNumberAd] = useState("");
  const [advice, setAdvice] = useState("");
  const [newAd, setNewAd] = useState(false);

  const changeHover = (wnWidth, scWidth) => {
    const aRef = document.getElementsByClassName("ref-link");
    const btns = document.getElementsByClassName("btn");
    if (wnWidth <= 1440 || scWidth <= 1440) {
      aRef[0].classList.remove("ref-link-hover");
      btns[0].classList.remove("btn-hover");
    } else {
      aRef[0].classList.add("ref-link-hover");
      btns[0].classList.add("btn-hover");
    }
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setNumberAd(data.slip.id);
      });
    changeHover(window.innerWidth, screen.width);
  }, [newAd]);
  return (
    <div className="card">
      <p className="card-title">ADVICE #{numberAd}</p>
      <p className="card-body">“{advice}”</p>
      <div className="card-separator"></div>
      <div className="card-btn">
        <div
          className="btn btn-hover"
          onClick={(e) => {
            setNewAd(!newAd);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
