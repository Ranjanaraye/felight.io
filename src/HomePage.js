import React from 'react'
import './HomePageStyle.scss';

 const HomePage = () => {
    return (

        <div className='homepage'>
            <div className='categories-container'>

                <div className='container-item'>
                    <div className='container-holder'>
                        <h1 className='title'>Java Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>

                <div className='container-item'>
                    <div className='container-holder'>
                        <h1 className='title'>JavaScript Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>

                <div className='container-item'>
                    <div className='container-holder'>
                        <h1 className='title'>Python Full Stack</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>

                <div className='container-item'>
                    <div className='container-holder'>
                        <h1 className='title'>Data Science</h1>
                        <span className='subtitle'>Know More</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePage;
