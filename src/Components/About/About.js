import React from 'react'

const About = () => {
  return (
    <>
        {/* Main div */}
    <div className='lg:px-0'>
          {/* About page images full width */}
        <div className='lg:w-full'>
            {/* <h2 className='text-5xl'>About Us</h2> */}
        <img className='lg:w-full h-screen' src='./about-page-img-11.jpg ' alt='images'/>
        </div>
          {/* chield div image and text*/}
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-14'>
      <div className='md:w-1/2'>
        <img  className='md:w-8/10' src='./about-page-img-5.jpg' alt="images" />
      </div> 
      <div className='md:w-1/2 '>
        <h2 className='text-4xl my-8 md:w-4/4'>Welcome To Welfare Stablished Since<span className='text-blue-600 space-x-10'> 2015</span></h2>
        <p className='mb-10 text-md md:w-6/6 opacity-70'>
        The Big Oxmox advised her not to do so, 
        because there were thousands of bad Commas, 
        wild Question Marks and devious Semikoli, 
        but the Little Blind Text didn’t listen. 
        She packed her seven versalia, 
        put her initial into the belt and made herself on the way.</p>
        <p className='mb-10 text-md md:w-6/6 opacity-70'>On her way she met a copy. The copy warned the Little Blind Text, 
            that where it came from it would have been rewritten a thousand times 
            and everything that was left from its origin would be the word "and" 
            and the Little Blind Text should turn around and return to its own, 
            safe country. But nothing the copy said could convince her and so it didn’t 
            take long until a few insidious Copy Writers ambushed her, made her drunk with Longe 
            and Parole and dragged her into their agency, where they abused her for their.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About