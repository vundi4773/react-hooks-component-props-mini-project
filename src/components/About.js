import React from "react";

function About({image,about}) {
    const defaultImage ="https://via.placeholder.com/215"
  return (
    <div>
      <aside>
        <img src={image || defaultImage } alt="blog logo"/>
        <p>{about}</p>
      </aside>
    </div>
  );
}

export default About;
