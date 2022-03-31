import StarRating from "./StarRating";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <div className="commentBlock">
      <div className="commentHead">
        <StarRating rating={comment.rating} />
        <h4 className="commentTitle">{comment.title}</h4>
      </div>

      <p className="commentRemark">{comment.remark}</p>
    </div>
  );
}

export default Comment;
