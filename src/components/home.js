import React from "react";
// import Cvfile from "./components/cvfile.pdf";
// import Contact from "./components/contact.js";


function Home (){
    const CvFileUrl = process.env.PUBLIC_URL + "/cvfile.pdf";

return(
    <>
<section className="home" id="home">
    <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Ravinder Prasad Gairola</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit optio, facere ea veritatis nisi
            reprehenderit, nulla excepturi ipsam, sint corrupti delectus ullam. Laboriosam nihil ut, laudantium
            reiciendis sint quaerat facilis!</p>
        <div className="social-media">
            <a href="/"><i className="bx bxl-facebook"></i></a>
            <a href="/"><i className="bx bxl-twitter"></i></a>
            <a href="/"><i className="bx bxl-instagram-alt"></i></a>
            <a href="/"><i className='bx bxl-linkedin'></i></a>

        </div>
        <a href={CvFileUrl} download="cv.pdf" className="btn">Download CV</a>
    </div>

    <div className="profession-container">
        <div className="profession-box">
            <div className="profession" style= {{"--i" :0}}>
                <i className='bx bx-code-alt'></i>
                <h3>Web Developer</h3>
            </div>
            
            <div className="profession" style= {{"--i" :1}}>
                <i className='bx bx-camera'></i>
                <h3>Photographer</h3>
            </div>
            <div className="profession" style= {{"--i" :2}}>
                <i className='bx bx-palette'></i>
                <h3>Web Desiner</h3>
            </div>
            <div className="profession" style= {{"--i" :3}}>
                <i className='bx bx-video-recording'></i>
                <h3>Videographper</h3>
            </div>

            <div className="circle"></div>
        </div>
        <div className="overlay"></div>
    </div>

    <div className="home-img">
        <img src="" alt="" />
    </div>
</section>
    </>

);
};
export default Home;