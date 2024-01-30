import Spline from '@splinetool/react-spline';
import {motion, useTransform, useScroll} from "framer-motion";
import { useRef } from 'react';
import React, { useState, useEffect} from 'react';

export const Timeline = () => {
    {/*more to be added, not done with timeline yet */}
    const cards = [
        {date: "June 2016", desc: "First time ever coding"},
        {date: "2018", desc: "First ever hackathon. As expected of a bunch of middle schoolers, we didn't get a finished product out in time. However, we did learn a lot about coding and teamwork."},
        {date: "August 2021", desc: "Entered High School as a freshmen, enrolling into two semester-long coding courses"},
        {date: "August 2022", desc: "Returning to High School as a sophomore, enrolling into AP CS A"},
        {date: "November 2023", desc: "Began Ebay Scraper Project"},
    ]
    return (
        <div>        
            <h2>My Coding Journey</h2>
            <div id="timeline">
            <div id="cards">
                {cards.map((card, index) => (
                    <div className='card'>
                        <p>{card.date}</p>
                        <p className='cardtext'>{card.desc}</p>
                    </div>
                ))}
                </div>
                <div id="floating">
                <Spline scene='https://prod.spline.design/4dGC-FoT8s301dfz/scene.splinecode'/>
                </div>
            </div>
        </div>
    );
}