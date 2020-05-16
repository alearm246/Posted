import React, { useState, useEffect } from "react";
import style from "./ArticleHolder.module.css";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import articleArray from "./ArticleArray.js";

function ArticleHolder() {
  const [articleCard] = useState(articleArray);

  let [articles] = useState(articleArray);

  //we get the article array from the localstorage and we turn
  //we turn the array string back into an array so we can do stuff with it
  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articles;

  localStorage.setItem("articles", JSON.stringify(articles));

  //we loop through the articl data from the local storafe and render all the articles from the storage
  const articlesCards = articleData.map(individualArticle => (
    <ArticleCard
      body={individualArticle.body}
      id={individualArticle.uid}
      key={individualArticle.uid}
      link={individualArticle.link}
      subTitle={individualArticle.subTitle}
      title={individualArticle.title}
    />
  ));
  console.log(articleData.length);
  return (
    <div className={style.articleHolder}>
      <div className={style.article}>
        {articleData.length >= 0 ? (
          articlesCards
        ) : (
          <h1>Oh no it looks like you need to create some new artices!</h1>
        )}
      </div>
    </div>
  );
}

export default ArticleHolder;
