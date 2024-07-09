import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Navigation/Nav';
import { Button, Table } from 'react-bootstrap';
import UpdatePatient from './UpdatePatient';

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:4500/Patient/API/all/Patient');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients', error);
    }
  };

  const deletePatient = async (user_Id) => {
    try {
      await axios.delete(`http://localhost:4500/Patient/API/delete/Patient${user_Id}`);
      setPatients(patients.filter(patient => patient.user_Id !== user_Id));
    } catch (error) {
      console.log(`Deleting patient with user_Id: ${user_Id}`);
      console.error("Error deleting patient", error.response ? error.response.data : error);
    }
  };

  const startEditing = (patient) => {
    setEditingPatient(patient);
  };

  const cancelEditing = () => {
    setEditingPatient(null);
  };

  const handleUpdate = () => {
    fetchPatients();
    setEditingPatient(null);
  };

  return (
    <>
      {editingPatient ? (
        <UpdatePatient 
          patient={editingPatient} 
          onCancel={cancelEditing} 
          onUpdate={handleUpdate} 
        />
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Password</th>
                <th>Sickle Cell Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.user_Id}>
                  <td>{patient.user_Id}</td>
                  <td>{patient.fullName}</td>
                  <td>{patient.address}</td>
                  <td>{patient.age}</td>
                  <td>{patient.email}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.password}</td>
                  <td>{patient.sickle_cell_Type}</td>
                  <td>
                    <Button 
                      className='upbtn' 
                      onClick={() => startEditing(patient)}
                    >
                      Update
                    </Button>
                    <Button 
                      className='btn' 
                      onClick={() => deletePatient(patient.user_Id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant='secondary'>
            <a href='/registration'>Add</a>
          </Button>
        </>
      )}
    </>
  );
}

export default Patient;
