import { useEffect, useState } from "react";
import Comment from "./Comment";
import "./Users.css";

function Users() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((comms) => setComments(comms));
  }, []);

  const displayComments = comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div id="commentBody">
      <div id="commentSection">{displayComments}</div>
    </div>
  );
}

export default Users;
