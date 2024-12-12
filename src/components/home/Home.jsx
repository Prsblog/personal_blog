import  React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt="" className='home__img' />
                <h1 className='home__name'>Dominiqe </h1>
                <span className='home__education'>Front-end developer</span>

                <HeaderSocial />
                <a href="#contact" className='btn'>More Info</a>

                <ScrollDown />

            </div>
        </section>
    )
}
export default Home