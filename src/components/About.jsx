import React from "react";

const About = () => {
    return (
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-[#de143b]">
              About
            </p>
          </div>
  
          <p className="text-xl">
          Hello My name is Cyrus Jabez Rasos, or CJ Rasos for short. I am currently a third-year Computing Science student at Simon Fraser University.
            I have a passion for echnology, particularly cybersecurity, artificial intelligence, and software development. As a kid, I loved playing video games, which made me fall in love with the field of technology. The notion of creating games for people and bringing them full of joy made me pursue computer science.
          </p>
          <br/>
          <p className="text-xl">
          My interests consist of a myriad of sports and media. In particular, I love basketball and soccer. My favorite teams are Chelsea FC and the Los Angeles Lakers. 
          Moreover, in terms of media, I love narratives that have huge ensembles and are thought-provoking. For instance, a show about technology and coding, specifically cybersecurity, is one of my favourite stories ever, which is Mr. Robot.
          </p>
        </div>
      </div>
    );
  };

  export default About;