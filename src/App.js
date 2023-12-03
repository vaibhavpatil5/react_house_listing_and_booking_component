import React, { useContext } from 'react';
import { RentalContext } from './RentalContext';
import PropertyList from './PropertyList';
import BookingForm from './BookingForm';

const App = () => {
  const {
    properties,
    selectedProperty,
    bookingFormVisible,
    onPropertySelect,
    onToggleBookingForm,
  } = useContext(RentalContext);

  return (
    <div>

      <PropertyList properties={properties} onSelect={onPropertySelect}  property={selectedProperty}
          onBook={onToggleBookingForm} />
     
    
      {bookingFormVisible && <BookingForm onClose={onToggleBookingForm} />}
    </div>
  );
};

export default App;
