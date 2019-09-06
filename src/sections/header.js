import React, {useState} from 'react'
import './header.scss'
import OpeningImg from '../resource/opening.png'
import OpeningTitle from '../resource/openingTitle.png'

let Header = () => {

    const [fadeOutRate, setFadeOutRate] = useState(0);

    window.addEventListener('scroll', ev => {
        let rate = window.scrollY/window.innerHeight * 2;
        setFadeOutRate(rate > 1? 1 :rate);
    })

    return (
        <header style={{filter: `opacity(${1-fadeOutRate}) sepia(0.4)`,
                        display: fadeOutRate>=1?'none':'block'}}>
            <img src={OpeningImg} 
                 alt='using a fish eye lens portrayed 
                      Sam Chang Deng sky for opeing' 
                 id={`openingImg`}
                 />
            
            <img src={OpeningTitle}
                 alt='Sam Chang Deng'
                 id='openingTitle'
                 />

            {/* 
              * two layer of shadow
              */}
            <img src={OpeningTitle} alt='shadow' className='openingTitleShadow' 
                 style={{filter: `blur(50px) opacity(${1-fadeOutRate})`}}/>

            <img src={OpeningTitle} alt='shadow' className='openingTitleShadow' 
                 style={{filter: `blur(50px) opacity(${1-fadeOutRate})`}}/>

            <span id='scrollDownTip'>
                Scroll Down↓
            </span>
        </header>
    )
}

export default Header;