export const About = () =>{
    return(
    <div>
        <h2 id = "infotitle">A little about me...</h2>
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