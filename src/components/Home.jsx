import React from 'react';
import Navbar from './Navbar';
import './css/Home.css';
import pfp from '../assets/hana.JPG';
import Timeline from './Timeline';

const SKILLS = ["React"]

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='contents'>
                <div className='intro'>
                    <img src={pfp} alt="Profile Picture" className='pfp' />
                    <div className='about'>
                        <h1>Hello,</h1>
                        <h1>I'm Hana!</h1>
                        <p>I'm a software engineer based in San Jose with a creative approach to problem solving, eager to thrive in fast-paced environments
                            while embracing challenges and continuous learning</p>
                        <p>IG: <a href="https://www.instagram.com/haa0_0naa" target="_blank" rel="noopener noreferrer">@haa0_0naa</a></p>
                        <p>Github: <a href="https://github.com/Hana1107" target="_blank" rel="noopener noreferrer">@Hana1107</a></p>
                    </div>
                    
                </div>
                <div className='skills'>
                    <div className='education'>
                        <Timeline />
                    </div>
                    <div className='tech-stacks'>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;