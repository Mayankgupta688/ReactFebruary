import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <Link style={{marginRight: "10px"}} to="/">Home</Link>
                <Link style={{marginRight: "10px"}} to="/help">Help</Link>
                <Link style={{marginRight: "10px"}} to="/about">About</Link>
            </nav>
        </div>
    )
}