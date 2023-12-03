import React, { createContext, useState, useEffect } from 'react';

const RentalContext = createContext();

const RentalProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17'
      );
      const data = await response.json();
      setProperties(data.houses);
      console.log(data.houses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  const toggleBookingForm = () => {
    setBookingFormVisible(!bookingFormVisible);
  };

  return (
    <RentalContext.Provider
      value={{
        properties,
        selectedProperty,
        bookingFormVisible,
        onPropertySelect: handlePropertySelect,
        onToggleBookingForm: toggleBookingForm,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export { RentalContext, RentalProvider };
