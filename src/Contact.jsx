export const Contact = () => {
    return(
        <div id="container-contact">
            <h2 style={{fontSize:"32px", fontFamily: "Futura"}}>Contact Me</h2>
            <p>adriantseee2@gmail.com</p>
            <div className="contacts">
                <a href="tel:91908261">
                    <h1 className="contact-links">Whatsapp</h1>
                </a>
                <a href="https://www.linkedin.com/in/adrian-tse-50a4432ab/" target="_blank">
                    <h1 className="contact-links">Linkedin</h1>
                </a>
                <a href="https://github.com/adriantseee/" target="_blank">
                    <h1 className="contact-links">Github</h1>
                </a>
            </div>
        </div>
    )
}