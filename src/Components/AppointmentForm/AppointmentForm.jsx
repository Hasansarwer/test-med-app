import { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appoinment:</label>
          <input 
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          /></div>
        <div className="form-group">
          <label htmlFor="selectSlot">Book Time Slot:</label>
          <input 
          type="time" 
          id="selectSlot"
          min="09:00"
          max="17:00"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
          /></div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
