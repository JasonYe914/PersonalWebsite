import './CSS/navbar.css'; 
import { Link} from "react-router-dom";

function navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <p className="name">Jason Ye</p>
                <Link to="/" className="home-link"> Home </Link> 
                <Link to="/project" className="project-link"> Projects </Link> 
                <Link to="/contact" className="contact-link"> Contact </Link> 
            </div>
        </nav>
    )
}

export default navbar; 