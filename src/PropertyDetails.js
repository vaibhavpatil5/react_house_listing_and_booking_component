import React, { useState ,useContext } from 'react';
import { RentalContext } from './RentalContext';
import BookingForm from './BookingForm';
const DescriptionDetails = ({ description }) => (
  <>
    <p>Short Description: {description.short_description}</p>
    <p>Long Description: {description.long_description}</p>
  </>
);

const PropertyDetails = ({ onClose }) => {
  const { selectedProperty } = useContext(RentalContext);
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  const showBookingForm = () => {
    setIsBookingFormVisible(true);
  };

  return (
    <div>
      <h2>Property Details</h2>
      {selectedProperty && (
        <>
          <div className="property-card">
            <div className="card-content">
              <div className="card-price">
                <strong>{selectedProperty.title}</strong>
                <p className="card-text">
                  {selectedProperty.description && (
                    <DescriptionDetails description={selectedProperty.description} />
                  )}
                  {selectedProperty.amenities &&
                    Array.isArray(selectedProperty.amenities) && (
                      <p>Amenities: {selectedProperty.amenities.join(', ')}</p>
                    )}
                  <p>Availability: {selectedProperty.availability}</p>
                </p>
              </div>
            </div>

          
            <div className="button-container">
              <button className="btn" onClick={showBookingForm}>
                Book Now
              </button>
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
          {isBookingFormVisible && <BookingForm onClose={() => setIsBookingFormVisible(false)} />}
        </>
      )}
    </div>
  );
};

export default PropertyDetails;
