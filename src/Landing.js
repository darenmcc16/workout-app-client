import React from 'react'
import Footer from './Footer'





function Landing(){
        return(
        <div className='landing-main'>
            <div className='landing'>
                <section id='landingPage'>
                    <div className='description'>
                        <h5>No longer going to the gym or need new workouts to push yourself.  You can create a exercise plan that best fits you at Gym Hero.
                        Once you have login in you will be able to search workout videos as well as save them to your workout plan list.
                        </h5>
                    </div>
                    <Footer />
                </section>
            </div>
        </div>
        )
    }

export default Landing;