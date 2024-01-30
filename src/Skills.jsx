export const Skills = () => {
    const skills  = ["C++", "Python", "C#", "Swift", "Fusion 360", "Django", "Pandas", "BeautifulSoup", "TensorFlow", "Java"]
    return(
        <div>
            <h2>Skills</h2>
            <p>I'm always learning, but here are some of the skills that I've picked up along the way!</p>
            <div id = "skillswrapper">
                <div id = "skills">
                    {skills.map(skill => {
                        return(
                            <div className = "skill">
                                <div className = "container">
                                    <img class="skilllogo" src = {`src/assets/${skill}.png`}/>
                                </div>
                                <p>{skill}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}