import React, { useState } from "react";
import style from "./Form.module.css";
import articleArray from "../../common/ArticleHolder/ArticleArray.js";

function Form(props) {
  let [articleId, setArticleId] = useState(5);

  let newArticleId = localStorage.getItem("articleId")
    ? JSON.parse(localStorage.getItem("articleId"))
    : 1;

  let [articles] = useState(articleArray);

  let [form, setForm] = useState({ title: "", subTitle: "", body: "" });

  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articles;

  //set my articles array to the localstorage
  //we turn the articles array into a string because setItem only accepts strings
  localStorage.setItem("articles", JSON.stringify(articleData));

  //Set articleId from state into localstorage
  localStorage.setItem("articleId", JSON.stringify(newArticleId));

  //generates a new string Id to createe uniqe id's for the articles
  const generateNewId = () => {
    let id = JSON.parse(localStorage.getItem("articleId"));
    id++;
    localStorage.setItem("articleId", JSON.stringify(id));
    const idString = JSON.stringify(localStorage.getItem("articleId"));
    console.log(idString);
    return idString;
  };

  const handleSubmit = event => {
    event.preventDefault();

    //creates new article data based on user input
    let newData = {
      alt: "new image alt",
      uid: generateNewId(),
      key: generateNewId(),
      title: form.title,
      href:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fminecraft%2F&psig=AOvVaw1jIsHQ5y0dHluulfR2BsBV&ust=1589268814797000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiPyuylq-kCFQAAAAAdAAAAABAD",
      subTitle: form.subTitle,
      body: form.body,
      link: "/blog"
    };

    //pushes newly created articles into the articles array
    articles.push(newData);
    //new artile array gets set into localstorage
    localStorage.setItem("articles", JSON.stringify(articles));

    const data = JSON.parse(localStorage.getItem("articles"));

    console.log(data);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  //generates a new id string for the

  //gets called when the submit button is pressed

  return (
    <div className={style.formContainer}>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={form.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          subTitle:
          <input
            type="text"
            value={form.subTitle}
            name="subTitle"
            placeholder="subTitle"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <textarea
            value={form.body}
            onChange={handleChange}
            name="body"
            placeholder="Type the body of your blog here"
            rows="5"
            cols="20"
          />
        </label>
        <br />
        <button className={style.button} onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
