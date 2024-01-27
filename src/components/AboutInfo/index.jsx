import React from "react";
import './style.css'

function AboutInfo() {
  return <div className="aboutInfo">
    <div className="top bg-[#82828520] p-12 pb-0  rounded-[10px]">
          <div>
              <h1>Welcome to VebersZone: Where Web Dreams Come to Life</h1>
          </div>
    </div>
    <div className="container bg-[#82828520] p-10 rounded-[10px]">
        <img className="img" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"/>
        <div className="  text-[#ffffffa1]">
          <p>At VebersZone, we don't just build websites; we craft digital experiences that leave a lasting impression. Our agency is the brainchild of two remarkable individuals, Emily Turner and Alex Rodriguez, who share a common vision of pushing the boundaries of web development. Welcome to a world where innovation meets precision, and every line of code is a brushstroke on the canvas of the digital future.<br/><br/>
          VebersZone is more than just a website development agency; it's a hub of creativity, expertise, and passion. Our team, led by industry stalwarts Emily and Alex, is dedicated to transforming your ideas into immersive online experiences. From sleek corporate websites to interactive e-commerce platforms, we take pride in delivering solutions that not only meet but exceed your expectations.</p>
        </div>
    </div>
  </div>;
}

export default AboutInfo;
