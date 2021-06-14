import React from 'react';
import Common from './Common';
import web from '../src/img/kakashi.png';

const About=()=>
{
    return(
        
        <Common name1="About Us" name2="We are an anime streaming platform" link="/contact" text="Contact" imgsrc={web}></Common>

    );
}


export default About;