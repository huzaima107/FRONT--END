import React, { useState } from 'react';
import axios from 'axios';

const PatientRecordForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    contactNumber: '',
    diagnosis: '',
    treatment: '',
    followUpDate: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient-records', formData);
      console.log('Patient record saved:', response.data);
    } catch (error) {
      console.error('There was an error saving the patient record:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Fill Patient's Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">Patient Name</label>
          <input type="text" className="form-control" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="treatment" className="form-label">Treatment</label>
          <input type="text" className="form-control" id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="followUpDate" className="form-label">Follow-Up Date</label>
          <input type="date" className="form-control" id="followUpDate" name="followUpDate" value={formData.followUpDate} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea className="form-control" id="notes" name="notes" value={formData.notes} onChange={handleChange} rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PatientRecordForm;
