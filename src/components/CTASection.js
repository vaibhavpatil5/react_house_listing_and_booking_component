import React from 'react';

const CTASection = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">Looking for a dream home?</h2>
            <p className="card-text">
              We can help you realize your dream of a new home
            </p>
          </div>
          <button className="btn cta-btn">
            <span>Explore Properties</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
