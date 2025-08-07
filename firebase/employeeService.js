import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
	query,
	where,
} from "firebase/firestore";

import { db } from './firebase';

const employeesRef = collection(db, 'employees');

export const getEmployees = async() =>  {
    const snapshot = await getDocs(employeesRef);
    return snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
}

export const addEmployees = async(employeeData) => {
	const docRef = await addDoc(employeesRef, employeeData);
	return docRef;
}