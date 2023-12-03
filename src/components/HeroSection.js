import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <ion-icon name="home"></ion-icon>
            <span>Nestways Agency</span>
          </p>
          <h2 className="h1 hero-title">Find Your Dream House By Us</h2>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="btn">Make An Enquiry</button>
        </div>

        <figure className="hero-banner">
          <img
            src="https://th.bing.com/th/id/OIP.gXFliHcfgp9h5nSwGI6PDgHaFl?rs=1&pid=ImgDetMain"
            alt="Modern house model"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
