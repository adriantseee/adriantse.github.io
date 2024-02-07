import Spline from '@splinetool/react-spline';
import {TypeAnimation} from 'react-type-animation'

export const Hero = () => {
    return(
        <div>
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
                    <Spline id="robot" scene="https://prod.spline.design/gXDeJ3XTDyB2SQA8/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}