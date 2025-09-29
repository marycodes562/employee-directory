import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
	query,
	where,
	and
} from "firebase/firestore";

import { app, db } from './firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const employeesRef = collection(db, 'employees');
const auth = getAuth(app);

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

export const deleteEmployees = async(id) => {
	const emptyDoc = doc(db, 'employees', id);
	return await deleteDoc(emptyDoc);
}

export const updateEmployee = async(id, updatedData) => {
	const editDoc = doc(db, 'employees', id);
	return await updateDoc(editDoc, updatedData);
}

export const findByCountry = async(location, department) => {
	let q;
	let locationQuery = query(employeesRef, where("location", "==", location));
	let departmentQuery = query(employeesRef, where("department", "==", department));
	let landDQuery = query(employeesRef, and(where("location", "==", location), where("department", "==", department)));

	if (location && department) {
		q = landDQuery;
	} else if (location) {
		q = locationQuery;
	} else if (department) {
		q = departmentQuery;
	} else {
		q = employeesRef
	}

	const qResponse = await getDocs(q);
	const result = [];

	qResponse.docs.forEach((country) => {
		result.push({
			id: country.id,
			...country.data()
		})
	})

	return result;
}

export const searchQuery = async(queryInput) => {
	let searchQ = query(employeesRef, 
		or(where("firstName", "==", queryInput),
		   where("lastName", "==", queryInput),
		   where("email", "==", queryInput),
		   where("location", "==", queryInput), 
		   where("department", "==", queryInput)));

	const queryResponse = await getDocs(searchQ);
	const results = [];
	
	queryResponse.docs.forEach((q) => {
		results.push({
			id: q.id,
			...q.data()
		})
	})

	return results;
}

export const signUp = async(email, password) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async(email, password) => {
	return await signInWithEmailAndPassword(auth, email, password);
}