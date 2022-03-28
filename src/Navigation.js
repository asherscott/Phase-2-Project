import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <span>Something</span>

            <div className="links">
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/about">About</Link>
                </span>
                <span>
                    <Link to="/users">Users</Link>
                </span>
            </div>
        </nav>
    )
}

export default Navigation;