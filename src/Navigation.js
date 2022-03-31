import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <span id="logo">
        {/* Logo Here */}
        <img
          className="logo"
          src="https://stardewvalleywiki.com/mediawiki/images/b/b2/Animals_Icon.png"
        />
        <img
          className="logo"
          src="https://stardewvalleywiki.com/mediawiki/images/6/63/Abigail_Icon.png"
        />
        <img
          className="logo"
          src="https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png"
        />
      </span>

      <div className="links">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/characters">Characters</Link>
        </span>
        <span>
          <Link to="/users">Tips and Tricks</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
