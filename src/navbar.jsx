import './CSS/navbar.css'; 
import { Link} from "react-router-dom";

function navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="name">Jason Ye</Link>
                <Link to="/" className="home-link"> Home </Link> 
                <Link to="/" className="project-link"> Projects </Link> 
                <Link to="/" className="contact-link"> Contact </Link> 
            </div>
        </nav>
    )
}

export default navbar; 