// Import Modal component correctly
import Modal from 'react-modal';
import React, { useState, useContext } from 'react';
import { RentalContext } from './RentalContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PropertyDetails from './PropertyDetails'; // Import PropertyDetails component

import './style.css'; // Import a separate CSS file for styling

const PropertyList = () => {
  const { properties, onPropertySelect } = useContext(RentalContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state variable

  if (!properties) {
    return <p>Loading...</p>;
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const divStyle = {
    cursor: 'pointer',
  };

  return (
    <>
      <Header />
      <HeroSection />
      <section className="property" id="property">
        <div className="container">
          <p className="section-subtitle">Properties</p>
          <h2 className="h2 section-title">House Listings</h2>

          <ul className="property-list">
            {properties.map((property) => (
              <li key={property.id} className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={property.image_url}
                      alt={property.title}
                      className="w-100"
                    />
                  </a>
                  <div
                    className={`card-badge ${
                      property.house_type === 'For Rent' ? 'green' : 'orange'
                    }`}
                  >
                    {property.house_type}
                  </div>
                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <ion-icon name="pin"></ion-icon>
                      <address>{property.locality}</address>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="card-price">
                    <strong>{property.rent}rs</strong>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">{property.title}</a>
                  </h3>
                  <ul className="card-list">
                    <li className="card-item">
                      <strong>{property.bhk_details}</strong>
                      <ion-icon name="bed"></ion-icon>
                      <span>Bedrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.bathroom_count}</strong>
                      <ion-icon name="sunny"></ion-icon>
                      <span>Bathrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.area}</strong>
                      <ion-icon name="square"></ion-icon>
                      <span>Square Ft</span>
                    </li>
                    <li
                      className="card-item"
                      style={divStyle}
                      onClick={() => {
                        toggleModal();
                        onPropertySelect(property);
                      }}
                    >
                      <strong>View Details</strong>
                      <ion-icon name="arrow-forward"></ion-icon>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            zIndex: 5, 
          },
          content: {
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '20px',
            width: '80%',
            maxWidth: '600px',
            height: '80vh',
            overflow: 'auto',
            maxHeight: '80vh',
            zIndex: 5, 
          },
        }}
      >
        <PropertyDetails onClose={toggleModal} />
      </Modal>

      <CTASection />
      <Footer />
    </>
  );
};

export default PropertyList;
