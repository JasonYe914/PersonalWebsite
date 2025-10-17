import './CSS/home.css'; 

function home(){
    return (
        <div className="container">
            <div className="aesthetics">
                <div className="orange-line"></div>
                <h1>ABOUT.</h1>
            </div>
            <div className="bio-1">
                <p className="bio">Hi, I’m Jason Ye — a passionate and driven software developer based in Ontario. 
                    I am a second year Queen's Engineering student, specializing in engineering, where I built a strong foundation in algorithms, 
                    web development, and data structures.
                </p>
                <p className="bio-2">
                    I enjoy turning ideas into real web experiences, whether that’s crafting clean UIs, 
                    optimizing performance, or learning new frameworks. Outside the code, I’m a lifelong learner with a curiosity for design, tech trends, and improving my skills every day.
                </p>
            </div>
        
            <div className="dashed-line"></div>
        </div>
    )
}

export default home; 