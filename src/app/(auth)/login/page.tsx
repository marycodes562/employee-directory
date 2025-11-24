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
import Image from 'next/image';

import styles from './page.module.css';
import { login } from '../../../../firebase/employeeService';
import toast from 'react-hot-toast';
import ButtonComp from '@/components/profile/button';
import ForgotPassword from '@/components/profile/forgotPasssword';
import ForgotPasswordModal from '@/components/profile/forgotPasssword';

export default function LoginPage() {
	const [formData, setFormData] = useState({email: '', password: ''});
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Email is required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: async(values) => {
			try {
				await login(values.email, values.password);
				toast.success("login successful");
				router.push("/employeeInfo");
			} catch(error) {
				const firebaseError = error as {code?:string};
				let errorMessage = "Error occurred during login";

				if (firebaseError.code === "auth/invalid-credential") {
					errorMessage = "Invalid email or password, please try again.";
				}

				toast.error(errorMessage);

				console.log(firebaseError);
				console.log(firebaseError.code);
			}
		}
	})

	return (
		<div className={styles.page}>
		<div className={styles.overlay}></div>
		<Card className={styles.form} style={{ width: '25rem' }}>

			{/*Logo */}
			<img 
				src="/logo2nobg.png"
				alt="logo"
				width={330}
				height={120}
			/>

			{/*Greeting Header */}
			<h4 className={styles.header}>Nice to see you again</h4>
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
						<div className={styles.buttonContainer}>
							<ButtonComp 
								type='submit'
								text="login"
								style={{width: "10rem", color: "#fff",
                      background: "linear-gradient(135deg, #6fc7c2, #a185ff)",
                    }}
							/>
						</div>
						<br /><br />
			</Form>
			
						{/*Create an account link */}
						<a href="/signUp" className={styles.createAccount}>Create an account</a><br/>

						
						{/*Forgot password link */}
						<a  className={styles.forgotPassword} onClick={() => setShowForgotPasswordModal(true)}>Forgot Password</a>
		</Card>

		<ForgotPasswordModal show={showForgotPasswordModal} handleClose={() => setShowForgotPasswordModal(false)} />
	</div>
	);
}
