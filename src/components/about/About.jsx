import  React from 'react';
import "./about.css";
import Image from '../../assets/vatae1.jpg';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section__title'>About Me</h2>

            <div className='about__container grid'>
                <img src={Image} alt="" className='about__img' />

                <div className='about__data grid'>
                    <div className='about__info'>
                        <p className='about__description'>
                            An enthusiastic IT Consultant with 16 years of experience in Computer User support, Data communication and Networking, IT Services, and Cyber Security. <br/>
                            I am a passionate IT Trainer with 11 years of experience in higher learning institutions and 7 years as a CISCO Advanced Instructor. <br/>
                            Skilled in Cybersecurity and Emerging Technologies. <br/>
                            Able to handle multiple tasks simultaneously. <br/>
                            Good ability to work in groups and to lead IT Technical teams. <br/>
                            Excellent communication skills, experienced in Customer service. <br/>
                            Skilled in Computer hardware, Network design and administration <br/>
                            Familiar with Client-Server systems and Linux Administration Environment <br/>
                            Skilled in software development and web-based solutions <br/>
                            Skilled in cloud computing. <br/>
                            Outstanding analytical and problem-solving skills. <br/>
                            Good communication, negotiation, and leadership skills.
                        </p>
                        <a href="" className='btn'>Download CV</a>
                    </div>

                    <div className='about__skills grid'>
                        <div className='skill__data'>
                            <div className='skill__titles'>
                                <h3 className='skills__name'>Cybersecurity</h3>
                                <span className='skills__number'>90%</span>
                            </div>


                            <div className='skills__bar'>
                                <span className='skills__percentage development'></span>
                            </div>
                        </div>

                        <div className='skill__data'>
                            <div className='skill__titles'>
                                <h3 className='skills__name'>cloud computing</h3>
                                <span className='skills__number'>95%</span>
                            </div>


                            <div className='skills__bar'>
                                <span className='skills__percentage ui__design'></span>
                            </div>
                        </div>

                        <div className='skill__data'>
                            <div className='skill__titles'>
                                <h3 className='skills__name'>Client-Server systems and Linux Administration Environment</h3>
                                <span className='skills__number '>90%</span>
                            </div>


                            <div className='skills__bar'>
                                <span className='skills__percentage photography'></span>
                            </div>
                        </div>

                        
                    </div>
                </div>  
            
            </div>
            <AboutBox/>
        </section>
    )
}
export default About