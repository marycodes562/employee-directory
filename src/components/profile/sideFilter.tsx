"use client"

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import locations from '@/Data/locationData';

import 'bootstrap/dist/css/bootstrap.min.css';

function SideFilter() {

        const [location, setLocation] = useState(locations);


    return (
        <div>
            <ul>
                {location.map((loc, index) => (
                    <li key={loc.id}>{loc.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default SideFilter;