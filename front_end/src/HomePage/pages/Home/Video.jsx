import React from "react";
// import { useState } from "react"
// const src = "https://www.youtube.com/embed/vnoof879qRc";
// import videoSrc from "./../assets/video.mp4";
// import videoSrc from "./../assets/video.mp4";
import breaks from './../../assets/pg9.png'

export default function Video() {
    return (
        <>
        
        <div className=" my-5">
            <div className="videoContainer  m-auto text-center">
                {/* <h2>video</h2> */}

                  <video autoPlay  controls width="100%"> 
                     <source src="./../assets/video.mp4" type="video/webm" />
                    <source src="./../assets/video.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>  
                {/* Background Video */}
        {/* <video id="home-bg-video" poster="./assets/solo.jpg" autoplay loop muted>
            <source src="video/solo.mp4" type="video/mp4" />
            <source src="video/solo.ogv" type="video/ogg" />
            <source src="video/solo.webm" type="video/weebm" />
        </video> */}

                {/* <iframe
                    width="560"
                    height="315"
                    src={src}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe> */}
            </div>
        </div>
            <div className="breaksColors conatiner-fluid flex justify-center">

<img className="breaksBooksImg " src={breaks} />
<img className="breaksBooksImg " src={breaks} />
<img className="breaksBooksImg " src={breaks} />




      </div>
   
 
   
   </> );
}
