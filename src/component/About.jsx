import React, { useEffect, useState } from "react";

const About = () => {
    const skills = ["Frontend Developer", "React js Developer" , "Full Stack Developer"]
  const [text, setText] = useState(0);


  useEffect(() => {
  const interval = setInterval(()=>{
    setText((prev) =>(prev+1) % skills.length)
  },2000)

  return ()=> clearInterval(interval)
  },[]);

  return (
     <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-14 gap-8 px-4 md:px-12">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              Ritik Mohan Srivastava
            </h1>
            <h1 className="text-2xl md:text-4xl font-medium py-4 md:py-6 text-center lg:text-left">
              I am{" "}
              <span className="text-purple-500 font-bold">{skills[text]}</span>
            </h1>
            <p className="py-2 text-gray-400 text-base md:text-xl text-center lg:text-left">
              I am a motivated and versatile individual, always eager to take
              on new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="btn btn-primary mt-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/159484939?s=400&u=503b5fa2c0423cbe4ed148e3d54adb124c032cfa&v=4"
          className="w-50 h-50 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full shadow-2xl object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
    };


export default About;
