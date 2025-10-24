import './CSS/project.css'; 

function project(){
    return (
        <section className="project-section">
            <div className="project-1">
                <h1 className="project-1-title">Valorant Team Picker</h1>
                <a 
                    href="https://github.com/JasonYe914/ValorantTeamSelect"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="Screenshot 2025-10-18 014353.png" alt="valorant" className="project-1-img"></img>
                    <img src="Screenshot 2025-10-18 180723.png" alt="valorant" className="project-1-img2"></img>
                </a>
                <p className="project-1-info"> Built a full-stack CRUD application that allows users to create a fantasy Valorant 
                                                team using Spring Boot for backend and React.js for frontend. 
                    <br /> 
                    <p></p>
                                                Designed RESTful APIs for create/read/update/delete operations; set up PostgreSQL 
                                                database to store and query persistent data. 
                    <br /> 
                    <p></p>
                                                Implemented authentication and state management in React; handled error states and 
                                                form validations. 
                    <br /> 
                    <p></p>
                                                Containerized the application using Docker, enabling easier deployment and isolation  
                </p>
                
            </div>
            <div className="project-2">
                <h1 className="project-2-title">Popular Movie Finder</h1>
                <a 
                    href="https://github.com/JasonYe914/list-of-movies"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="Screenshot 2025-10-18 011806.png" alt="Movie" className="project-2-img"></img>
                    <img src="Screenshot 2025-10-18 013055.png" alt="movie-1" className="project-2-img2"></img>
                </a>
                <p className="project-2-info">Built a movie website that shows top 10 most popular movies currently by fetching data from IMDB's API.
                                              <br /> 
                                              <p></p>
                            
                                              Used HTML & CSS for formatting and visuals and React.js for all logic based components. 
                                              Examples are page routing, mapping and favourite button. 
                                              <br /> 
                                              <p></p>
                            
                </p>
            </div>
            <div className="project-3">
                <h1 className="project-3-title">Flappy Bird Simulation</h1>
                <a 
                    href="https://github.com/JasonYe914/FlappyBirdGame"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="Screenshot 2025-09-02 192834.png" alt="flappy" className="project-3-img"></img>
                </a>
                <p className="project-3-info">Developed an automated Flappy Bird game in Java with graphical display using 
                                                Swing/AWT. 
                                                <br />  
                                                <p></p>
                                                                               
                                                Implemented bird movement logic, physics for gravity and collision detection. 
                                                <br />  
                                                <p></p>
                            
                                                Designed and trained a genetic learning component: populations of bird agents 
                                                evolve via mutation and selection, improving performance over generations. 
                                                <br /> 
                                                <p></p>
                            
                                                Tuned parameters (mutation rate, population size, obstacle spacing) to optimize 
                                                learning; tracked performance metrics across generations. 
                    </p>
            </div>
        </section>
    )
}

export default project; 