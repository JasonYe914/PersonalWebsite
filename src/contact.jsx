import './CSS/contact.css'; 
import {useRef, useState} from "react"; 
import emailjs from "emailjs-com"; 

function contact(){
    const formRef = useRef(); 
    const [status, setStatus] = useState("idle"); 
    const [name, setName] = useState(""); 
    const [body, setBody] = useState(""); 
    const [email, setEmail] = useState(""); 

    const sendEmail = (e) => {
        e.preventDefault(); 
        setStatus("Sending..."); 

        emailjs
        .sendForm(
            "TEMPLATE",
            "TEMPLATE",
            formRef.current,
            "TEMPLATE"
        ).then(
            () => {
                setStatus("Sent!");
                formRef.current.reset(); 
            },
            (error) => {
                console.error(error);
                setStatus("Failed"); 
            }
        );
    }

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1 className="get-in-touch">Get in touch</h1>
                <p className="sentence">I'd like to hear from you!</p>
                <p className="sub-para">If you have an inquries or just want to 
                    <br/>
                    say hi, please use the contact me form</p>
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
            <div className="contact-form">
                <form ref={formRef}>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Your Name'
                        className="name-portion"
                    />
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className="Email-portion"
                    />
                    <input 
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Message' 
                        className="message-portion"
                    />
                    <button onClick={sendEmail} className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default contact; 