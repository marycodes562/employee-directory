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