
import React, { useState, useContext } from 'react';
import { RentalContext } from './RentalContext';

const BookingForm = ({ onClose }) => {
  const { selectedProperty } = useContext(RentalContext);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    bookingDates: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted:', formData);

    onClose();
  };

  return (
    <div>
      <h2>Booking Component</h2>
      {selectedProperty && (
        <>
          <div className="property-card">
            <div className="card-content">
              <div className="card-price">
                <strong>{selectedProperty.title}</strong>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Contact:
                    <input
                      type="number"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Booking Dates:
                    <input
                      type="date"
                      name="bookingDates"
                      value={formData.bookingDates}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <button className="btn" type="submit">
                    Submit Booking
                  </button>
                </form>
              </div>
            </div>

            <div className="button-container">
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
