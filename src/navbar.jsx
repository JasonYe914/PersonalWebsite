 
import { Link} from "react-router-dom";

function navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="home-link"> Home </Link> 
                <Link to="/about" className="about-link"> About </Link> 
                <Link to="/project" className="project-link"> Project </Link> 
                <Link to="/contact" className="contact-link"> Contact Me </Link> 
            </div>
        </nav>
    )
}

export default navbar; 