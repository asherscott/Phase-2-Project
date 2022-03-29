import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav>
            <span>Logo Here</span>

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
    )
}

export default Navigation;