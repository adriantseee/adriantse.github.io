import Spline from '@splinetool/react-spline';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {
    return (
        <div>
        <h1 style={{fontFamily: "Futura"}}>My Coding Journey</h1> 
        <h2>Follow along my journey of learning</h2>
        <VerticalTimeline>
            <VerticalTimelineElement
                class = "element"
                contentStyle={{ background: 'white', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                icon = {
                    <div className = "flex justify-center items-center w-full h-full">
                        <img style={{width: "60px"}} className = "object-contain" src = "src/assets/points.png"/>
                    </div>
            }
            iconStyle={{background: "#000", borderThickness: "0px"}}
            >
                <h1 className="cardtitle">Introduction to Coding</h1>
                <h3 className="carddescription">{"test description"}</h3>
                <p className="date">June 2016</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            class = "element"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            icon = {
                <div className = "flex justify-center items-center w-full h-full">
                    <img style={{width: "60px"}} className = "object-contain" src = "src/assets/points.png"/>
                </div>
            }
            iconStyle={{background: "#000", borderThickness: "0px"}}
            >
                <h1 className="cardtitle">Title</h1>
                <h3 className="carddescription">{"test description"}</h3>
                <p className="date">2018</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            class = "element"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            icon = {
                <div className = "flex justify-center items-center w-full h-full">
                    <img style={{width: "60px"}} className = "object-contain" src = "src/assets/points.png"/>
                </div>
            }
            iconStyle={{background: "#000", borderThickness: "0px"}}
            >
                <h1 className="cardtitle">Title</h1>
                <h3 className="carddescription">{"test description"}</h3>
                <p className="date">2019</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            class = "element"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            icon = {
                <div className = "flex justify-center items-center w-full h-full">
                    <img style={{width: "60px"}} className = "object-contain" src = "src/assets/points.png"/>
                </div>
            }
            iconStyle={{background: "#000", borderThickness: "0px"}}
            >
                <h1 className="cardtitle">Title</h1>
                <h3 className="carddescription">{"test description"}</h3>
                <p className="date">2021</p>
            </VerticalTimelineElement>
        </VerticalTimeline>    
        </div>
    );
}