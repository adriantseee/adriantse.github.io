export const Contact = () => {
    return(
        <div style={{marginTop: "300px"}}>
        <div style={{marginLeft: "40px"}}>
            <h1 style={{letterSpacing: "8px", fontSize: "80px"}}>Like what you see?</h1>
            <img style={{position: "absolute", marginLeft: "700px", marginTop: "-400px"}} id = "pfp" src = "/assets/pfp.png"></img>
            <h1 style={{position: "absolute", letterSpacing: "8px", fontSize: "80px", marginLeft: "280px", marginTop: "-40px"}}><span>Let's get in </span><span style={{color: "#a44444"}}>touch</span></h1>
        </div>
        <div id="container-contact" style={{marginTop:"400px"}}>
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