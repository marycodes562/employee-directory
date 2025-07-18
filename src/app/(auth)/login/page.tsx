"use client";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !password) {
			alert('Please input a username and password');
		} else {
			router.push('/signUp');
		}

	} 

	return (
		<div className={styles.page}>
		<Card border="primary" className={styles.form} style={{ width: '20rem' }}>
			<Form onSubmit={handleSubmit}>
						<FloatingLabel
						controlId="floatingInput"
						label="Email address"
						className="mb-3"
						>
						<Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
						</FloatingLabel>

						<FloatingLabel
						controlId="floatingPassword"
						label="Password"
						className="mb-3"
						>
						<Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
						</FloatingLabel>

						<Button type="submit" className={styles.signInButton}>Sign in</Button><br /><br />

						<a href="/signUp">Create an account</a>
			</Form>
		</Card>
	</div>
	);
}
