export const About = () =>{
    return(
        <div className="about-wrapper">
            <h1 style={{fontSize: "64px"}}>A LITTLE ABOUT ME...</h1>
            <div className = "about" style={{width: "100vw", display: "flex", justifyContent: "center"}}>
                <img src = "/assets/pfp.png" style = {{position: "absolute", height: "80vh", borderRadius: "25px"}}></img>
                <h2 style = {{position:"absolute", width: "40vw", marginLeft: "50vw", marginTop: "75vh"}}>Hi there! I'm Adrian. I'm a programming hobbyist based in Hong Kong. I try to code as much as I can when I have time, and usually take up projects that involve the use of SwiftUI or Python. If you want to do something, I'm sure we can take your dreams from just an idea to a reality!</h2>
            </div>
            <div style={{marginBottom: "100vh"}}>

            </div>
        </div>
)
}