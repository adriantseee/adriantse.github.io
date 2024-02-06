import React, {useState} from 'react'
import {motion} from 'framer-motion';

export const Skills = () => {
    const skills  = [
        {skill: "C++", imgName: "cpp"}, 
        {skill: "Python", imgName: "python"},
        {skill: "C#", imgName: "csharp"}, 
        {skill: "Swift", imgName: "swift"},
        {skill: "Fusion 360", imgName: "f360"}, 
        {skill: "Django", imgName: "dj"},
        {skill: "Pandas", imgName: "pandas"},
        {skill: "TensorFlow", imgName: "tf"},
        {skill: "Java", imgName: "java"},
    ]
    const [openMenu, setOpenMenu] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(false)

    const toggleMenu = (selection) => {
        if (openMenu == selection){
            return setOpenMenu(null);
        }

        setOpenMenu(selection);
    }

    const toggleHover = (selection) => {
        return setHoverMenu(selection);
    }
    return(
        <div>
        <div id = "skills-wrapper" style={{marginTop: "100px"}}>
            {/* idea: make it so that the cursor has a faint little blur behind it. Whenever the cursor hovers over some element here, change the blur's color (eg. if hovering over c#, the main color is purple, so change the blur color to purple*/}
            <div style={{height: "100%", position: "relative"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h1 style={{letterSpacing: "8px", fontSize: "80px"}}>SKILLS</h1>
                <hr></hr>
                </div>
                <h1 style={{width: "450px"}}>I'm always learning, but here are some of the skills that I've picked up along the way!</h1>
            </div>
                <div style = {{display:"flex", justifyContent: "center"}}>
                    <div id = "menu-skills">
                    <motion.div layout onClick={() => toggleMenu(0)} style={{border: "0px", minWidth: "900px"}} 
                        onMouseEnter={() => toggleHover(0)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 0 ? "#dcc9a8" : "#8c8c73", borderBottom: "0.5px solid white", borderRadius: openMenu === 0 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
                            <div className="menu-skill" layout="position" style={{width: openMenu === 0  ? "95%" : "100%"}}>
                                    <motion.h1 layout="position" style={{marginLeft: hoverMenu === 0 ? openMenu === 0 ? "36px" : "12px" :  openMenu === 0 ? "24px" : "5px", fontSize: "60px"}}>Languages</motion.h1>
                                    {openMenu === 0 ? <motion.h1 layout="position">-</motion.h1> : <motion.h1 layout="position">+</motion.h1>}
                            </div>
                            <div className={openMenu === 0 ? 'skill-icons show' : 'skill-icons'} style={{backgroundColor: openMenu === 0 ? "#dcc9a8" : "#868686", transition: "background-color 0.25s linear"}}>
                            <img className = "skill-img" src="/assets/cpp.png"/>
                            <img className = "skill-img" src="/assets/csharp.png"/>
                            <img className = "skill-img" src="/assets/swift.png"/>
                            <img className = "skill-img" src="/assets/python.png"/>
                            <img className = "skill-img" src="/assets/java.png"/> 
                            </div>
                        </div>
                    </motion.div>     
                    <motion.div layout onClick={() => toggleMenu(1)} style={{border: "0px", minWidth: "300px"}}
                        onMouseEnter={() => toggleHover(1)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 1 ? "#dcc9a8" : "#8c8c73", borderBottom: "0.5px solid white", borderRadius: openMenu === 1 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
                            <div className="menu-skill" style={{ width: openMenu === 1 ? "95%" : "100%"}}>
                                    <motion.h1 layout="position" style={{marginLeft: hoverMenu === 1 ? openMenu === 1 ? "36px" : "12px" :  openMenu === 1 ? "24px" : "5px", fontSize: "60px", fontSize: "60px"}}>Frameworks</motion.h1>
                                    {openMenu === 1 ? <motion.h1 layout="position">-</motion.h1> : <motion.h1 layout="position">+</motion.h1>}
                            </div>
                            <div className={openMenu === 1 ? 'skill-icons show' : 'skill-icons'} style={{backgroundColor: openMenu === 1 ? "#dcc9a8" : "#868686", transition: "background-color 0.25s linear"}}>
                                <img className = "skill-img" src="/assets/pandas.png"/>
                                <img className = "skill-img" src="/assets/tf.png"/>
                                <img className = "skill-img" src="/assets/dj.png"/>
                                {/*below images are not added in yet*/}
                                <img className = "skill-img" src="/assets/requests.png"/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div layout onClick={() => toggleMenu(2)} style={{border: "0px", minWidth: "300px"}}
                        onMouseEnter={() => toggleHover(2)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 2 ? "#dcc9a8" : "#8c8c73", borderBottom: "0.5px solid white", borderRadius: openMenu === 2 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
                            <div className="menu-skill" style={{width: openMenu === 2 ? "95%" : "100%"}}>
                                    <motion.h1 layout="position" style={{marginLeft: hoverMenu === 2 ? openMenu === 2 ? "36px" : "12px" :  openMenu === 2 ? "24px" : "5px", fontSize: "60px"}}>Software</motion.h1>
                                    {openMenu === 2 ? <motion.h1 layout="position">-</motion.h1> : <motion.h1 layout="position">+</motion.h1>}
                            </div>
                            <div className={openMenu === 2 ? 'skill-icons show' : 'skill-icons'} style={{backgroundColor: openMenu === 2 ? "#dcc9a8" : "#868686", transition: "background-color 0.25s linear"}}>
                                <img className = "skill-img" src="/assets/f360.png"/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        <motion.div layout="position" style={{marginTop: "400px"}}>
        <motion.div style={{margin: "-100px 10% 40px 10%"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'flex-start'}}>
                <h1 style={{letterSpacing: "8px", fontSize: "80px"}}>PROJECTS</h1>
                <hr style={{width: "500px", marginLeft: "0px"}}></hr>
                </div>
            <h2>I'm always creating new things and experimenting with new tools! Here are a few of my most recent projects</h2>
        </motion.div>
        <div className = "project">
            <img src="/assets/snipes.png"/>
            <div className = "project-desc">
                <div className = "fraction-project">
                    <hr style = {{width: "40px", marginBottom: "20px"}}></hr>
                    <h2>01/04</h2>
                </div>
                <h1>Snipes</h1>
                <p>Snipes is a program developed to search for good Pokemon Card deals on eBay. Using the results found, it uploads it to a database, where it is used for the Snipes app.</p>
                <a href = "https://youtube.com">
                    <div className='read-more-button' style={{backgroundColor: "#a44444", display: "flex", justifyContent: "center", borderRadius: "5%", width: "150px", marginTop: "60px"}}>
                        <h2 style={{color: "white", fontSize: "20px"}}>Read More</h2>
                    </div>
                </a>
            </div>
        </div>
        <div className = "project">
            <img src="/assets/rps.png"/>
            <div className = "project-desc">
                <div className = "fraction-project">
                    <hr style = {{width: "40px", marginBottom: "20px"}}></hr>
                    <h2>02/04</h2>
                </div>
                <h1>Rock Paper Scissors</h1>
                <p>A game of Rock Paper Scissors developed in SwiftUI. It was my first time experimenting with keyframes and animation in SwiftUI, so this was a great learning experience for me.</p>
                <a href = "https://youtube.com">
                    <div className='read-more-button' style={{backgroundColor: "#a44444", display: "flex", justifyContent: "center", borderRadius: "5%", width: "150px", marginTop: "60px"}}>
                        <h2 style={{color: "white", fontSize: "20px"}}>Read More</h2>
                    </div>
                </a>
            </div>
        </div>
        <div className = "project">
            <img src="/assets/tree.png"/>
            <div className = "project-desc">
                <div className = "fraction-project">
                    <hr style = {{width: "40px", marginBottom: "20px"}}></hr>
                    <h2>03/04</h2>
                </div>
                <h1>Christmas AR Experience</h1>
                <p>An experience made in Swift for the winter season! Use gestures to become a tree or spawn in a sled. This was my first ever time experimenting with AR {"(Yes, ever!)"}, so it was difficult, but lots of fun.</p>
                <a href = "https://youtube.com">
                    <div className='read-more-button' style={{backgroundColor: "#a44444", display: "flex", justifyContent: "center", borderRadius: "5%", width: "150px", marginTop: "60px"}}>
                        <h2 style={{color: "white", fontSize: "20px"}}>Read More</h2>
                    </div>
                </a>
            </div>
        </div>
        <div className = "project">
            <img src="/assets/unite.png"/>
            <div className = "project-desc">
                <div className = "fraction-project">
                    <hr style = {{width: "40px", marginBottom: "20px"}}></hr>
                    <h2>04/04</h2>
                </div>
                <h1>PikAIchu</h1>
                <p>Using image detection AI, it is possible to automate basic tasks, such as scoring and fighting, in the game. This was my first time doing machine learning, so it was actually a very fun process!</p>
                <a href = "https://youtube.com">
                    <div className='read-more-button' style={{backgroundColor: "#a44444", display: "flex", justifyContent: "center", borderRadius: "5%", width: "150px", marginTop: "60px"}}>
                        <h2 style={{color: "white", fontSize: "20px"}}>Read More</h2>
                    </div>
                </a>
            </div>
        </div>
    </motion.div>
    </div>
    )
}