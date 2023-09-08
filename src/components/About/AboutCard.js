import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amogh Masur. </span>
            <br /> I am a passionate Full Stack Developer.
            <br />
             I Built beautiful and responisve web pages  
            <br />
            <br />
            I even do <span className="purple"> Freelancing,</span> Feel free to connect. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
