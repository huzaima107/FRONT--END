import React, { useState, useEffect } from 'react';

const PatientInfoPage = () => {
  const [patientInfo, setPatientInfo] = useState(null);

  // Simulated fetch operation
  useEffect(() => {
    // Simulated fetch patient information
    const fetchPatientInfo = () => {
      // Simulated patient data
      const mockPatientInfo = {
        name: 'John Doe',
        contact: '123-456-7890',
        medicalHistory: 'Sickle cell diagnosis in 2018. Currently under regular checkups.',
      };
      setPatientInfo(mockPatientInfo);
    };

    fetchPatientInfo();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Patient Information</h2>
      <hr />
      {patientInfo ? (
        <div>
          <p><strong>Name:</strong> {patientInfo.name}</p>
          <p><strong>Contact:</strong> {patientInfo.contact}</p>
          <p><strong>Medical History:</strong> {patientInfo.medicalHistory}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading patient information...</p>
      )}
    </div>
  );
}

export default PatientInfoPage;
