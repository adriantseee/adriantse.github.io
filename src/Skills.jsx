export const Skills = () => {
    const skills  = [
        {skill: "C++", imgName: "cpp"}, 
        {skill: "Python", imgName: "python"},
        {skill: "C#", imgName: "csharp"}, 
        {skill: "Swift", imgName: "swift"},
        {skill: "Fusion 360", imgName: "f360"}, 
        {skill: "Django", imgName: "dj"},
        {skill: "Pandas", imgName: "pandas"},
        {skill: "BeautifulSoup", imgName: "bs4"}, 
        {skill: "TensorFlow", imgName: "tf"},
        {skill: "Java", imgName: "java"},
    ]
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
                                    <img class="skilllogo" src = {`src/assets/${skill.imgName}.png`}/>
                                </div>
                                <p>{skill.skill}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}