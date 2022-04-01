import "./Comment.css";
import ReactStars from "react-rating-stars-component";
import React from "react";

function Comment({ comment, setComments, comments }) {
  const config = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  };

  function handleDelete() {
    fetch("http://localhost:3000/comments/" + comment.id, config);

    setComments((prevState) =>
      prevState.filter((item) => item.id !== comment.id)
    );
  }

  return (
    <div className="commentBlock">
      <div className="headRight">
        <div className="commentHead">
          <ReactStars
            {...{
              value: comment.rating,
              edit: false,
              emptyIcon: (
                <img
                  className="ratingImg empty"
                  src="https://www.stardewvalleywiki.com/mediawiki/images/2/24/Achievements_Icon.png"
                />
              ),
              filledIcon: (
                <img
                  className="ratingImg filled"
                  src="https://www.stardewvalleywiki.com/mediawiki/images/2/24/Achievements_Icon.png"
                />
              ),
            }}
          />
          <h4 className="commentTitle">{comment.title}</h4>
        </div>
        <button onClick={handleDelete} className="deleteBtn">
          X
        </button>
      </div>

      <p className="commentRemark">{comment.remark}</p>
    </div>
  );
}

export default Comment;
