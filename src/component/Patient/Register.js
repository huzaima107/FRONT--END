import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [sickleCellType, setSickleCellType] = useState('');

    const navigate = useNavigate();  

    const handleSubmits = (event) => {
        event.preventDefault();

        const requestData = {
            fullName: fullName,
            address: address,
            age: age,
            email: email,
            gender: gender,
            password: password,
            sickle_cell_Type: sickleCellType,
            role: "Admin"
        };

        axios.post('http://localhost:4500/Patient/API/add/Patient', requestData)
            .then(response => {
                console.log(response.data);
                toast.success("Registration successful!");
                navigate('/patient'); // Navigate to the patient page after successful registration
            })
            .catch(error => {
                console.error("There was an error in data fetching", error);
                toast.error("There was an error in data fetching");
            });
    }

    return (
        <Container className="regcontainer mt-5">
            <h2 className="text-center">Registration Form</h2>
            <Form onSubmit={handleSubmits}>
                <Form.Group as={Row} controlId="fullName" className="mb-3">
                    <Form.Label column sm={2}>Full Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            value={fullName} 
                            onChange={event => setFullName(event.target.value)} 
                            placeholder="Enter your full name" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="address" className="mb-3">
                    <Form.Label column sm={2}>Address</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            value={address} 
                            onChange={event => setAddress(event.target.value)} 
                            placeholder="Enter your address" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="age" className="mb-3">
                    <Form.Label column sm={2}>Age</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            value={age} 
                            onChange={event => setAge(event.target.value)} 
                            placeholder="Enter your age" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="email" className="mb-3">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={event => setEmail(event.target.value)} 
                            placeholder="Enter your email" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="gender" className="mb-3">
                    <Form.Label column sm={2}>Gender</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            as="select" 
                            value={gender} 
                            onChange={event => setGender(event.target.value)} 
                        >
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="password" className="mb-3">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={event => setPassword(event.target.value)} 
                            placeholder="Enter your password" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="sickleCellType" className="mb-3">
                    <Form.Label column sm={2}>Sickle Cell Type</Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            as="select" 
                            value={sickleCellType} 
                            onChange={event => setSickleCellType(event.target.value)} 
                        >
                            <option value="">Select your sickle cell type</option>
                            <option value="HbSS">HbSS (Sickle Cell Anemia)</option>
                            <option value="HbSC">HbSC</option>
                            <option value="HbSβ+ Thalassemia">HbSβ+ Thalassemia</option>
                            <option value="HbSβ0 Thalassemia">HbSβ0 Thalassemia</option>
                            <option value="HbSD">HbSD</option>
                            <option value="HbSE">HbSE</option>
                            <option value="HbSO">HbSO</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">Add</Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}

export default Register;
