"use client";

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './page.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [signedUp, setSignedUp] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (firstName && lastName) {
			alert('You are logged in')
		}
	}

	return (
		<div className={styles.page}>
			<Card border="primary" className={styles.form} style={{ width: '20rem' }}>
				
						<Form onSubmit={handleSubmit}>
																	
									<FloatingLabel
									controlId="floatingInput"
									label="First Name"
									className="mb-3"
									>
									<Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingInput"
									label="Last Name"
									className="mb-3"
									>
									<Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingInput"
									label="Email address"
									className="mb-3"
									>
									<Form.Control type="email" placeholder="name@example.com" onChange={(e) => e.target.value}/>
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingPassword"
									label="Password"
									className="mb-3"
									>
									<Form.Control type="password" placeholder="Password" />
									</FloatingLabel>
			
									<Button type="submit" className={styles.signUpButton}>Sign Up</Button>
						</Form>
					</Card>
		</div>
	);
}
