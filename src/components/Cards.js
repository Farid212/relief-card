import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";
import "./card.css";

const Cards = (props) => {
  useEffect(() => {
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");
    const title = document.querySelector(".title");
    const header = document.querySelector(".header img");
    const description = document.querySelector(".main h3");
    const sm = document.querySelector(".social-media");

    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      //Popout
      title.style.transform = "translateZ(150px)";
      header.style.transform = "translateZ(200px) rotateZ(-45deg)";
      description.style.transform = "translateZ(125px)";
      sm.style.transform = "translateZ(100px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      title.style.transform = "translateZ(0px)";
      header.style.transform = "translateZ(0px) rotateZ(0deg)";
      description.style.transform = "translateZ(0px)";
      sm.style.transform = "translateZ(0px)";
    });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <img src={props.image} alt={props.imageName} />
        </div>
        <div className="main">
          <h1 className="title">{props.cardTitle}</h1>
          <h3 className="subTitle">{props.subTitle}</h3>

          <div className="social-media">
            <SocialIcons links={props.medias} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
