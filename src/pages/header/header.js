import React from 'react'
import './header.css'
import Wave from "react-wavify";

export default function Header() {
  return (
    <reactFragment>
    <div className="home">
    <marquee scrolldelay="300" className="marquee">Welcome</marquee>
        <div className="header-container" id='home'>
            <div className="header-opening">
                <div className="header-opening-text">
                    <h1>Hi, I'm Ghozy Ikbar Fathoni.</h1>
                    <p>A Software Developer and Computer Science student at the University of Muhammadiyah Surakarta.</p>
                </div>
                <div className="header-button">
                    <a href='#about' type='button'>explore</a>
                    <a type='button'>resume</a>
                </div>
            </div>
            <div className="img-profil">
                <div className="header-img">
                </div>
            </div>
        </div>
        <div className="wavify">
            <Wave
            className="wave"
            fill="rgb(21, 15, 54)"
            paused={false}
            options={{
            height: 35,
            amplitude: 40,
            speed: 0.70,
            points: 4
            }}
            />
        </div> 
    </div>
    </reactFragment>
  )
}
