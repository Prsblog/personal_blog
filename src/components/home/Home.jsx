import  React from 'react';
import "./home.css";
import Me from "../../assets/vatae1.jpg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt="" className='home__img' />
                <h1 className='home__name'> HARELIMANA Dominique </h1>
                <span className='home__education'>I am an enthusiastic IT Consultant, passionate IT Trainer,  Skilled in Cybersecurity and Emerging Technologies among many things.</span>

                <HeaderSocial />
                <a href="#contact" className='btn'>More Info</a>
                

                <ScrollDown />

            </div>

            <Shapes />
        </section>
    )
}
export default Home