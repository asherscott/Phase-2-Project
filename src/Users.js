import { useEffect, useState } from "react";
import Comment from "./Comment";
import "./Users.css";
import CommentForm from "./CommentForm";

function Users() {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((comms) => setComments(comms));
  }, []);

  const displayComments = comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div id="pageBackground">
      <div id="commentBody">
        <button onClick={handleClick}>
          {!showForm ? "Leave a Comment!" : "Hide Comment Form"}
        </button>
        {showForm ? <CommentForm /> : null}
        <div id="commentSection">{displayComments}</div>
      </div>
    </div>
  );
}

export default Users;
