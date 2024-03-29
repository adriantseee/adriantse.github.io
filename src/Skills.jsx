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
                <hr style={{backgroundColor: "#a44444", borderColor: "#a44444"}}></hr>
                </div>
                <h1 style={{width: "450px"}}>I'm always learning, but here are some of the skills that I've picked up along the way!</h1>
            </div>
                <div style = {{display:"flex", justifyContent: "center", width: "50vw"}}>
                    <div id = "menu-skills">
                    <motion.div className = "expandable-skill" layout onClick={() => toggleMenu(0)} style={{border: "0px"}} 
                        onMouseEnter={() => toggleHover(0)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 0 ? "#dcc9a8" : "#181717", borderBottom: "2px solid #a44444", borderRadius: openMenu === 0 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
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
                    <motion.div className = "expandable-skill" layout onClick={() => toggleMenu(1)} style={{border: "0px"}}
                        onMouseEnter={() => toggleHover(1)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 1 ? "#dcc9a8" : "#181717", borderBottom: "2px solid #a44444", borderRadius: openMenu === 1 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
                            <div className="menu-skill" style={{ width: openMenu === 1 ? "95%" : "100%"}}>
                                    <motion.h1 layout="position" style={{marginLeft: hoverMenu === 1 ? openMenu === 1 ? "36px" : "12px" :  openMenu === 1 ? "24px" : "5px", fontSize: "60px", fontSize: "60px"}}>Frameworks</motion.h1>
                                    {openMenu === 1 ? <motion.h1 layout="position">-</motion.h1> : <motion.h1 layout="position">+</motion.h1>}
                            </div>
                            <div className={openMenu === 1 ? 'skill-icons show' : 'skill-icons'} style={{backgroundColor: openMenu === 1 ? "#dcc9a8" : "#868686", transition: "background-color 0.25s linear"}}>
                                <img className = "skill-img" src="/assets/pandas.png"/>
                                <img className = "skill-img" src="/assets/tf.png"/>
                                <img className = "skill-img" src="/assets/dj.png"/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className = "expandable-skill" layout onClick={() => toggleMenu(2)} style={{border: "0px"}}
                        onMouseEnter={() => toggleHover(2)}
                        onMouseLeave={() => toggleHover(null)}
                    >
                        <div style={{backgroundColor: openMenu === 2 ? "#dcc9a8" : "#181717", borderBottom: "2px solid #a44444", borderRadius: openMenu === 2 ? "5px" : "0px", overflow: "hidden", transition: "background-color 0.25s linear"}}>
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
        <motion.div layout="position">
        <motion.div style={{marginLeft: "5vw", marginTop: "15vh"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'flex-start'}}>
            <div>
                <h1 style={{letterSpacing: "8px", fontSize: "80px"}}>SELECTED</h1>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'flex-start', marginTop: "-100px"}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "50px", color: "#a44444"}}>
                        <h3 style={{marginRight: "10px"}}>2021</h3>
                        <hr style = {{height: "0.5px", width: "210px", backgroundColor: "#a44444", borderColor: "#a44444"}}></hr>
                        <h3 style={{marginLeft: "10px"}}>2024</h3>
                    </div>
                    <h1 style={{letterSpacing: "8px", fontSize: "80px", marginLeft: "80px"}}>WORKS</h1>
                </div>
            </div>
        </div>
        <h2 style={{marginTop:"-2vh"}}>I'm always creating new things and experimenting with new tools! Here are a few of my most recent projects</h2>
        </motion.div>
    </motion.div>
    </div>
    )
}