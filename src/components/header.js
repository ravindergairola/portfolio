import React from "react";
function Header(){

    return(
    <div>
    <header class="header"/>
    <a href="#" class="logo">Portfolio</a>
    <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>
    </div>
    );
};
export default Header;