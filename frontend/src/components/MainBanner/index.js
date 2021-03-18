import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./style.css";

const MainBanner = ({ ...props }) => {
  const { getRandomImgByTerm } = api.Unsplash,
    { title } = props,
    defaultImg =
      "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif",
    defaultTerm = "nature",
    [isLoading, setIsLoading] = useState(true),
    [img, setImg] = useState(defaultImg),
    [term, setTerm] = useState(defaultTerm);

  useEffect(() => {
    const imgCallback = (url) => {
      if (!url.includes("source-404")) {
        setImg(url);
        setTimeout(setIsLoading(false), 1500);
      } else {
        setImg(defaultImg);
        setIsLoading(true);
        changeTerm();
      }
    };

    getRandomImgByTerm(term, imgCallback);
  }, [getRandomImgByTerm, term]);

  const changeTerm = (event = undefined) => {
    if (event !== undefined) {
      event.preventDefault();
    }

    const newTerm = prompt(
      "Qual tema deseja?\nSepare os temas por vírgula.\nO termo deve ser escrito em inglês"
    );
    if (newTerm && newTerm !== undefined) {
      setTerm(newTerm.replace(/ /g, ""));
    } else {
      return;
    }
  };
  return (
    <section
      className={`main-banner${isLoading ? " loading" : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="main-banner__title">{title ? title : "Main Banner"}</h1>
      <a href="/produto" className="main-banner__btn" onClick={changeTerm}>
        Trocar termo
      </a>
    </section>
  );
};
export default MainBanner;
