"use client";

import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './page.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
	return (
		<div className={styles.page}>
			<Card border="primary" className={styles.form} style={{ width: '20rem' }}>
						<Form>								
									<FloatingLabel
									controlId="floatingInput"
									label="First Name"
									className="mb-3"
									>
									<Form.Control type="text" placeholder="First Name" />
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingInput"
									label="Last Name"
									className="mb-3"
									>
									<Form.Control type="text" placeholder="Last Name" />
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingInput"
									label="Email address"
									className="mb-3"
									>
									<Form.Control type="email" placeholder="name@example.com" />
									</FloatingLabel>
									
									<FloatingLabel
									controlId="floatingPassword"
									label="Password"
									className="mb-3"
									>
									<Form.Control type="password" placeholder="Password" />
									</FloatingLabel>
			
									<Button type="submit" className='signUpButton'>Sign Up</Button>
						</Form>
					</Card>
		</div>
	);
}
