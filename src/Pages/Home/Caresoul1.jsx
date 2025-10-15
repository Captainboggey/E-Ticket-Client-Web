import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import c1 from '../../assets/001.webp'
import c2 from '../../assets/002.webp'
import c3 from '../../assets/003.webp'
import c4 from '../../assets/004.webp'
import c5 from '../../assets/005.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Caresoul1 = () => {
    return (
        <div>
            <Carousel  showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={true} autoFocus={true}>
                <div >
                    <img className='md:h-[600px] ' src={c1}/>
                   
                </div>
                <div>
                    <img className='md:h-[600px]' src={c2}/>
                    
                </div>
                <div>
                    <img className='md:h-[600px]' src={c3}/>
                   
                </div>
                <div>
                    <img className='md:h-[600px]' src={c4}/>
                   
                </div>
                <div>
                    <img className='md:h-[600px]' src={c5}/>
                   
                </div>
            </Carousel>

            
        </div>
    );
};

export default Caresoul1;