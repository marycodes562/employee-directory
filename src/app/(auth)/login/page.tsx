"use client";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useRouter } from 'next/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './page.module.css';

export default function LoginPage() {
	const [formData, setFormData] = useState({email: '', password: ''});

	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string().required("Required"),
		}),
		onSubmit: values => {
			console.log(values);
			setFormData(values);
			router.push('/employeeInfo');
		}
	})

	return (
		<div className={styles.page}>
		<div className={styles.overlay}></div>
		<Card className={styles.form} style={{ width: '25rem' }}>
			{/*Greeting Header */}
			<h2 className={styles.header}>Nice to see you again</h2>
			<Form onSubmit={formik.handleSubmit}>
						{/*Email Address */}
						<FloatingLabel
						controlId="floatingInput"
						label="Email address"
						className="mb-3"
						>
						<Form.Control 
							name='email'
							type="email" 
							value={formik.values.email} 
							onChange={formik.handleChange} 
							placeholder="name@example.com" />
						</FloatingLabel>
						{formik.touched.email && formik.errors.email ? (
							<p className={styles.errors}>{formik.errors.email}</p>)
						: null}
						
						{/*Password */}
						<FloatingLabel
						controlId="floatingPassword"
						label="Password"
						className="mb-3"
						>
						<Form.Control 
							name='password'
							type="password" 
							value={formik.values.password} 
							onChange={formik.handleChange} 
							placeholder="Password" />
						</FloatingLabel>
						{formik.touched.password && formik.errors.password ? (
							<p className={styles.errors}>{formik.errors.password}</p>)
						: null}

						{/*Sign in button */}
						<Button 
							type="submit" 
							className={styles.signInButton}
							>
							Sign in
						</Button><br /><br />

						{/*Create an account link */}
						<a href="/signUp" className={styles.createAccount}>Create an account</a>
			</Form>
		</Card>
	</div>
	);
}
