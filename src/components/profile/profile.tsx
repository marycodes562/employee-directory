"use client";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function profilePage() {
    const router = useRouter();



    return (
        <div>
            <Card className={styles.profileCard} style={{ width: '25rem' }}>
                <h2 className={styles.header}>Profile Page</h2>
                <img src="/profile.png" alt="Profile" className={styles.profileImage} />
                <div>
                    <Form>
                        
                    <p>Full Name</p>
                    <p>Email Address</p>
                    </Form>

                </div>

                <Button variant="primary" >Edit Profile</Button>
                <Button variant="secondary" onClick={() => router.push('/login')}>Logout</Button>
            </Card>
        </div>
    )
}
