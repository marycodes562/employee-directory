"use client";

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {

	const router = useRouter();

	const [formSignUp, setformSignUp] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''	
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("Required"),
			lastName: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string().required("Required")
		}),
		onSubmit: values => {
			console.log(values);
			setformSignUp(values);
			router.push('/login');
		}
	})

	return (
		<div className={styles.page}>
			<Card className={styles.form} style={{ width: '25rem' }}>
					{/*Greeting Header */}
					<h2 className={styles.header}>Great to meet you!</h2>
						<Form onSubmit={formik.handleSubmit}>
									{/*First Name */}									
									<FloatingLabel
									controlId="floatingInput"
									label="First Name"
									className="mb-3"
									>
									<Form.Control 
										name="firstName"
										type="text" 
										placeholder="First Name" 
										onChange={formik.handleChange}
										value={formik.values.firstName}
									/>
									</FloatingLabel>
									{formik.touched.firstName && formik.errors.firstName ? (
										<p className={styles.errors}>{formik.errors.firstName}</p>
									) : null
									}
									
									{/*Last Name */}
									<FloatingLabel
									controlId="floatingInput"
									label="Last Name"
									className="mb-3"
									>
									<Form.Control 
										name="lastName"
										type="text" 
										placeholder="Last Name" 
										onChange={formik.handleChange} 
										value={formik.values.lastName}
									/>
									</FloatingLabel>
									{formik.touched.lastName && formik.errors.lastName ? (
										<p className={styles.errors}>{formik.errors.lastName}</p>
									) : null}
									
									{/*Email Address */}
									<FloatingLabel
									controlId="floatingInput"
									label="Email address"
									className="mb-3"
									>
									<Form.Control 
										name="email"
										type="email" 
										placeholder="name@example.com" 
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
									</FloatingLabel>
									{formik.touched.email && formik.errors.lastName ? (
										<p className={styles.errors}>{formik.errors.email}</p>
									) : null}
									
									{/*Password */}
									<FloatingLabel
									controlId="floatingPassword"
									label="Password"
									className="mb-3"
									>
									<Form.Control 
										name="password"
										type="password" 
										placeholder="Password" 
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
									</FloatingLabel>
									{formik.touched.password && formik.errors.password ? (
										<p className={styles.errors}>{formik.errors.password}</p>
									) : null}

									{/*Sign Up Button */}
									<Button type="submit" className={styles.signUpButton}>Sign Up</Button>
						</Form>
					</Card>
		</div>
	);
}
