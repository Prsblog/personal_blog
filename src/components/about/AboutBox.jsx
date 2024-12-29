import  React from 'react';


const AboutBox = () => {
    return (
        <div className='about__boxes grid'>
            <div className='about__box'>
                <i className='about__icon icon-fire'></i>

                <div>
                    <h3 className='about__title'>108</h3>
                    <span className='about__subtitle'>project completed</span>
                </div>
            </div>


            <div className='about__box'>
                <i className='about__icon icon-cup'></i>

                <div>
                    <h3 className='about__title'>11</h3>
                    <span className='about__subtitle'>Pending clients</span>
                </div>
            </div>


            <div className='about__box'>
                <i className='about__icon icon-people'></i>

                <div>
                    <h3 className='about__title'>57</h3>
                    <span className='about__subtitle'>satisfied clients</span>
                </div>
            </div>

            <div className='about__box'>
                <i className='about__icon icon-badge'></i>

                <div>
                    <h3 className='about__title'>15</h3>
                    <span className='about__subtitle'>Awards</span>
                </div>
            </div>
        </div>
    )
}
export default AboutBox