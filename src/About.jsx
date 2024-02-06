export const About = () =>{
    return(
    <div>
        <h2 id = "infotitle" style={{fontSize: "80px", letterSpacing: "8px", margin: "-100px 10% 40px 10%"}}>A little about me...</h2>
        <div className = "additionalinfo">
            <div id = "pfpcontainer">
                <img id = "pfp" src = "/assets/pfp.png"/>
            </div>
            <div className = "activities">
                <p>Hobbies 🏀: Basketball, Baseball, Golf, Building Keyboards</p>
                <p>Currently Learning 📖: React, SQL, AI/ML with Python</p>
        </div>
    </div>
</div>
)
}