import {Container, Row, Col} from 'react-bootstrap';
import Spline from '@splinetool/react-spline';
export const About = () => {
    return(
        <div>
            <div>
                <div className = "name">
                    <h1>ADRIAN</h1>
                    <h1>TSE</h1>
                </div>
                {/*Note that this is going to be a typing animation later on*/}
                <p>I am a student, 3D Designer, and Programmer</p>
            </div>
            <div>
                <h1>A little about me...</h1>
                <div className = "Photo">
                    {/*Put photo here, not working for now*/}
                </div>
                <div className = "info">
                    <p>Hobbies 🏀: Basketball, Baseball, Golf, Building Keyboard</p>
                    <p>Currently Learning 📖: React, SQL, AI/ML with Python</p>
                </div>
            </div>
            <Spline scene="https://prod.spline.design/gXDeJ3XTDyB2SQA8/scene.splinecode" />
        </div>
    )
}