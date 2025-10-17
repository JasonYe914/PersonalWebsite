import './CSS/contact.css'; 

function contact(){
    return (
        <section className="contact-container">
            <div className="contact-info">
                <h1 className="get-in-touch">Get in touch</h1>
                <p className="sentence">I'd like to hear from you!</p>
                <p className="sub-para">If you have an inquries or just want to 
                    <br/>
                    say hi, pelase use the contact me form</p>
                <p className="email">jason.ye914@gmail.com</p>
                <div className="icons">
                    <a 
                        href="https://www.linkedin.com/in/jason-ye-16a2202b8/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    Visit my LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default contact; 