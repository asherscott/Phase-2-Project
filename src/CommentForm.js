import "./CommentForm.css";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

function CommentForm({ setComments }) {
  const [newComment, setNewComment] = useState({ rating: 5 });

  function handleChange(e) {
    if (typeof e === "number") {
      setNewComment((prevState) => ({
        ...prevState,
        rating: e,
      }));
    } else {
      setNewComment((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setNewComment((prevState) => ({
      ...prevState,
    }));

    const config = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newComment),
    };

    fetch("http://localhost:3000/comments", config)
      .then((res) => res.json())
      .then((comm) => setComments((prevState) => [...prevState, comm]));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formHeader">
        <ReactStars
          {...{
            value: 5,
            edit: true,
            emptyIcon: (
              <img
                className="ratingImg empty formImg"
                src="https://www.stardewvalleywiki.com/mediawiki/images/2/24/Achievements_Icon.png"
              />
            ),
            filledIcon: (
              <img
                className="ratingImg filled formImg"
                src="https://www.stardewvalleywiki.com/mediawiki/images/2/24/Achievements_Icon.png"
              />
            ),
            onChange: (newValue) => handleChange(newValue),
          }}
        />
        <input
          className="inputTitle"
          placeholder="Enter Title"
          name="title"
          onChange={handleChange}
        ></input>
      </div>

      <textarea
        className="inputBody"
        placeholder="Enter Comment Body"
        name="remark"
        onChange={handleChange}
      ></textarea>
      <br />
      <input className="submitBtn" type="submit"></input>
    </form>
  );
}

export default CommentForm;
