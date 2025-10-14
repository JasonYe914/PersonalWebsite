import './CSS/project.css'; 

function project(){
    return (
        <section className="project-section">
            <div className="project-1">
                <h1 className="project-1-title">Valorant-Team Picker</h1>
                <p className="project-1-info"> ● Built a full-stack CRUD application that allows users to create a fantasy Valorant 
                                                team using Spring Boot for backend and React.js for frontend. 
                    <br /> 
                                                ● Designed RESTful APIs for create/read/update/delete operations; set up PostgreSQL 
                                                database to store and query persistent data. 
                    <br /> 
                                                ● Implemented authentication and state management in React; handled error states and 
                                                form validations. 
                    <br /> 
                                                ● Containerized the application using Docker, enabling easier deployment and isolation  
                </p>
                
            </div>
            <div className="project-2">
                <h1 className="project-2-title">Popular Movie Finder</h1>
                <p className="project-2-info">Built a movie website that shows top 10 most popular movies currently by fetching data from IMDB's API.
                                              <br /> 
                                              Used HTML & CSS for formatting and visuals and React.js for all logic based components. 
                                              Examples are page routing, mapping and favourite button. 
                                              <br /> 
                </p>
            </div>
            <div className="project-3">
                <h1 className="project-3-title">Flappy Bird Simulation</h1>
                <p className="project-3-info">● Developed an automated Flappy Bird game in Java with graphical display using 
                                                Swing/AWT. 
                                                <br />                                                     
                                                ● Implemented bird movement logic, physics for gravity and collision detection. 
                                                <br />  
                                                ● Designed and trained a genetic learning component: populations of bird agents 
                                                evolve via mutation and selection, improving performance over generations. 
                                                <br /> 
                                                ● Tuned parameters (mutation rate, population size, obstacle spacing) to optimize 
                                                learning; tracked performance metrics across generations. 
                    </p>
            </div>
        </section>
    )
}

export default project; 