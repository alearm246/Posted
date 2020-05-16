import React from "react";
import style from "./ArticleCard.module.css";
import cardImage from "./cardimage.png";
import closeButtonImage from "./close button.png";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const articleData = JSON.parse(localStorage.getItem("articles"));

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link to={`${props.link}/${props.id}`}>
          <img
            className={style.articleImg}
            src={cardImage}
            alt="articleImage"
          />
        </Link>
      </div>
      <div className={style.textcontainer}>
        <Link
          to={`${props.link}/${props.id}`}
          className={style.articleLink}
          style={{ color: "white" }}
        >
          {props.title}
        </Link>
        <Link
          to={`${props.link}/${props.id}`}
          className={style.articleLinksubtitle}
          style={{ color: "white" }}
        >
          <h3>{props.subTitle}</h3>
        </Link>
      </div>
      <div className={style.closeButton}>
        <img
          className={style.closeButtonImage}
          src={closeButtonImage}
          alt="close button"
        />
      </div>
    </div>
  );
}

export default ArticleCard;
