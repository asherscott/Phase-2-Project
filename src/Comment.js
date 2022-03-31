import "./Comment.css";
import ReactStars from "react-rating-stars-component";
import React from "react";

function Comment({ comment }) {
  return (
    <div className="commentBlock">
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

      <p className="commentRemark">{comment.remark}</p>
    </div>
  );
}

export default Comment;
