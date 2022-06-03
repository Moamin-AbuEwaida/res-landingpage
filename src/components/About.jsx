import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          reiciendis porro, laborum quidem ratione quae. Id iste quis delectus
          amet totam suscipit officiis? Laudantium soluta provident totam dolor
          deleniti repellat.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
};

export default About;
