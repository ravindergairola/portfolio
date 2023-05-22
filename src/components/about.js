import React from "react";

function About (){
return(
<>
<section class="about" id="about">
<div class="about-img">
    <img src="" alt=""/>
</div>



<div class="about-content">
    <h2 class="heading">About<span>Me</span></h2>
    <h3>Im a web Web Developer. </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error sit ab culpa necessitatibus id
        enim porro. Placeat autem, similique fugit quas unde ipsam assumenda deserunt esse. Iure quibusdam quae,
        esse consectetur ut ullam ab, impedit quidem atque nihil voluptas.</p>
    <a href="/" class="btn">Read More</a>
</div>
</section>
<section class="services" id="services">
<h2 class="heading">My <span>Services</span> </h2>



<div class="services-container">
    <div class="services-box">
        <i class='bx bx-code-alt'></i>
        <h3>Web Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat nihil suscipit velit alias
            magnam tempore maiores? Quo soluta perspiciatis quod facilis.</p>
        <a href="/" class="btn">Read More</a>
    </div>
    <div class="services-box">
        <i class='bx bx-bar-chart-alt'></i>
        <h3>Digital Marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat nihil suscipit velit alias
            magnam tempore maiores? Quo soluta perspiciatis quod facilis.</p>
        <a href="/" class="btn">Read More</a>
    </div>
    <div class="services-box">
        <i class='bx bxs-paint'></i>
        <h3>Graphic Desiner </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat nihil suscipit velit alias
            magnam tempore maiores? Quo soluta perspiciatis quod facilis.</p>
        <a href="/" class="btn">Read More</a>
    </div>
</div>
</section>
</>
);
};

export default About;