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
    return (
      <Comment
        key={comment.id}
        comment={comment}
        setComments={setComments}
        comments={comments}
      />
    );
  });

  return (
    <div className="parallax">
      <div className="image parallax_layer parallax__layer--base">
        <img
          className="image firstImg"
          src={
            "https://i.pinimg.com/564x/5b/7b/80/5b7b80e77be061cd9d621904b044692f.jpg"
          }
        />
        <img className="image" src={"https://i.redd.it/r1cvm4n8ank41.jpg"} />
      </div>

      <div id="pageBackground">
        <div id="commentBody">
          <div className="showForm">
            <button onClick={handleClick}>
              {!showForm ? "Leave a Comment!" : "Hide Comment Form"}
            </button>
          </div>

          {showForm ? <CommentForm setComments={setComments} /> : null}
          <div id="commentSection">{displayComments}</div>
        </div>
      </div>
      <div id="background"></div>
    </div>
  );
}

export default Users;
