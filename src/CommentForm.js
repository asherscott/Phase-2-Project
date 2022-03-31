import "./CommentForm.css";
import ReactStars from "react-rating-stars-component";

function CommentForm() {
  let starValue = 5;

  function handleSubmit(e) {
    e.preventDefault();
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
            onChange: (newValue) => (starValue = newValue),
          }}
        />
        <input className="inputTitle" placeholder="Enter Title"></input>
      </div>

      <textarea
        className="inputBody"
        placeholder="Enter Comment Body"
      ></textarea>
      <br />
      <input className="submitBtn" type="submit"></input>
    </form>
  );
}

export default CommentForm;
