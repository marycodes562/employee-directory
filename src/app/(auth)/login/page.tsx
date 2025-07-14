import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

export default function LoginPage() {
	return (
		<div>
		<Card border="primary" className="d-flex justify-content-center p-4" style={{ width: '20rem' }}>
			<Form >
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
						
						<Form.Check aria-label="option 1" /><p>Remember me?</p>
						<div>
							<a href="#">Don't have an account, sign up here</a>
						</div><br />

						<Button type="submit">Sign in</Button>
			</Form>
		</Card>
	</div>
	);
}
