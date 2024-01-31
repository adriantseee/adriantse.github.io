export const Projects = () => {    
    return(
        <div>
            <h1 style={{fontFamily:"Futura"}}>Projects</h1>
            <h2>I'm always creating new things and experimenting with new tools! Here are a few of my most recent projects</h2>
            <div className = "project">
                <div className = "project-info">
                    <div className = "project-important-info">
                        <h3 className = "project-date">2023</h3>
                        <h2 className = "project-name">Snipes</h2>
                    </div>
                    <div className = "project-made-with">
                        <p className = "made-with-skill">Python</p>
                        <p className = "made-with-skill">Beautiful Soup</p>
                        <p className = "made-with-skill">Requests</p>
                    </div>
                </div>
                <h3 className = "project-description">Scrapes EBay Auctions for good deals on pokemon cards</h3>
                <div className = "project-image-container">
                    <img className = "project-image" src = "src/assets/snipes.png"/>
                </div>
            </div>
            <div className = "project">
                <div className = "project-info">
                <div className = "project-important-info">
                    <h3 className = "project-date">2023</h3>
                    <h2 className = "project-name">Rock Paper Scissors</h2>
                </div>
                    <div className = "project-made-with">
                        <p className = "made-with-skill">SwiftUI</p>
                    </div>
                </div>
                <h3 className = "project-description">Rock Paper Scissors with player data and animations</h3>
                <div className = "project-image-container">
                    <img className = "project-image" src = "src/assets/rps.png"/>
                </div>
            </div>
            <div className = "project">
                <div className = "project-info">
                <div className = "project-important-info">
                    <h3 className = "project-date">2023</h3>
                    <h2 className = "project-name">Christmas AR experience</h2>
                </div>
                    <div className = "project-made-with">
                        <p className = "made-with-skill">Swift</p>
                        <p className = "made-with-skill">ARKit</p>
                    </div>
                </div>
                <h3 className = "project-description">A fun christmas experience using gesture based AR technology.</h3>
                <div className = "project-image-container">
                    <img className = "project-image" src = "src/assets/tree.png"/>
                </div>
            </div>
            <div className = "project">
                <div className = "project-info">
                <div className = "project-important-info">
                    <h3 className = "project-date">2022</h3>
                    <h2 className = "project-name">PikAIchu</h2>
                </div>
                    <div className = "project-made-with">
                        <p className = "made-with-skill">Python</p>
                        <p className = "made-with-skill">Jupyter Notebook</p>
                        <p className = "made-with-skill">Tensorflow</p>
                    </div>
                </div>
                <h3 className = "project-description">Plays Pokemon Unite using image detection to automate tasks</h3>
                <div className = "project-image-container">
                    <img className = "project-image" src = "src/assets/unite.png"/>
                </div>
            </div>
        </div>
    )
}