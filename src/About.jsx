import {Row, Col} from 'react-bootstrap';
import Spline from '@splinetool/react-spline';
import {TypeAnimation} from 'react-type-animation'

export const About = () => {
    return(
        <div className = "hero">
            <div className = "about">
                <div className = "title">
                    <div>
                        <div className = "name">
                            <h1>ADRIAN</h1>
                            <h1>TSE</h1>
                        </div>
                        {/*Note that this is going to be a typing animation later on*/}
                        {/*<p id="description">I am a student, 3D Designer, and Programmer</p>*/}
                        <TypeAnimation 
                        sequence={
                            ['Student', 3000, '3D Designer', 3000, 'Programmer', 3000]
                        }
                        speed={50}
                        style={{ fontSize: '24px'}}
                        repeat={Infinity}
                        />
                    </div>
                    <div className = "model">
                        <Spline scene="https://prod.spline.design/gXDeJ3XTDyB2SQA8/scene.splinecode" />
                    </div>
                </div>
                <div>
                    <h2 id = "infotitle">A little about me...</h2>
                    <div className = "additionalinfo">
                        <img id = "pfp" src = "src/assets/pfp.png"/>
                        <div className = "activities">
                            <p>Hobbies 🏀: Basketball, Baseball, Golf, Building Keyboards</p>
                            <p>Currently Learning 📖: React, SQL, AI/ML with Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}