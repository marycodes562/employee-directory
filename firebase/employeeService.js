import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
	query,
	where,
	and,
} from "firebase/firestore";
import { db } from "./firebase";

const employeesRef = collection(db, "employees");

// Fetch all employees
export const getEmployees = async () => {
	const snapshot = await getDocs(employeesRef);
	return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new employee
export const addEmployee = async (employeeData) => {
	const docRef = await addDoc(employeesRef, employeeData);
	return { id: docRef.id, ...employeeData };
};

// Update employee
export const updateEmployee = async (id, updatedData) => {
	const empDoc = doc(db, "employees", id);
	return await updateDoc(empDoc, updatedData);
};

// Delete employee
export const deleteEmployee = async (id) => {
	const emptyDoc = doc(db, "employees", id);
	return await deleteDoc(emptyDoc);
};

// (Optional) Check for duplicate email or employeeId
export const isEmailOrIdTaken = async (email, employeeId) => {
	const snapshot = await getDocs(
		query(employeesRef, where("email", "==", email))
	);
	if (!snapshot.empty) return true;

	const snapshot2 = await getDocs(
		query(employeesRef, where("employeeId", "==", employeeId))
	);
	return !snapshot2.empty;
};

export const findByCountry = async (location, department) => {
	let q;
	let locationQuery = query(employeesRef, where("location", "==", location));
	let departmentQuery = query(
		employeesRef,
		where("department", "==", department)
	);
	let landDQuery = query(
		employeesRef,
		and(
			where("location", "==", location),
			where("department", "==", department)
		)
	);

	if (location && department) {
		q = landDQuery;
	} else if (location) {
		q = locationQuery;
	} else if (department) {
		q = departmentQuery;
	} else {
		q = employeesRef;
	}

	const qResponse = await getDocs(q);
	const result = [];

	qResponse.docs.forEach((country) => {
		result.push({
			id: country.id,
			...country.data(),
		});
	});

	return result;
};
