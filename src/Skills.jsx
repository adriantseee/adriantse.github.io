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
        <div id = "skills-wrapper">
            <h1 style={{fontFamily: "Futura"}}>Skills</h1>
            <h2>I'm always learning, but here are some of the skills that I've picked up along the way</h2>
            <div>
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