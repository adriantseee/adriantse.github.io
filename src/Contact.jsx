export const Contact = () => {
    return(
        <div className = "contact-container">
        <div className = "call-to-action" style={{marginLeft: "10vw"}}>
            <h1 style={{letterSpacing: "8px", fontSize: "80px"}}>Like what you see?</h1>
            <img id = "pfp" src = "/assets/pfp2.png"></img>
            <h1 style={{position: "absolute", letterSpacing: "8px", fontSize: "80px", marginLeft: "15vw", marginTop: "-3vh"}}><span>Let's get in </span><span style={{color: "#a44444"}}>touch</span></h1>
        </div>
        <div id="container-contact"style={{marginTop:"20vh"}}>
            <div className="contacts">
                <a href="mailto:adriantseee2@gmail.com">
                    <h1 className="contact-links">Email</h1>
                </a>
                <a href="https://www.linkedin.com/in/adrian-tse-50a4432ab/" target="_blank">
                    <h1 className="contact-links">Linkedin</h1>
                </a>
                <a href="https://github.com/adriantseee/" target="_blank">
                    <h1 className="contact-links">Github</h1>
                </a>
            </div>
        </div>
        </div>
    )
}