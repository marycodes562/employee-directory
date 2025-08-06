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
import { db } from "./firebase";

const employeesRef = collection(db, "employees");

// Fetch all employees
export const getEmployees = async () => {
	const snapshot = await getDocs(employeesRef);
	return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new employee
export const addEmployee = async (employeeData) => {
	return await addDoc(employeesRef, employeeData);
};

// Update employee
export const updateEmployee = async (id, updatedData) => {
	const empDoc = doc(db, "employees", id);
	return await updateDoc(empDoc, updatedData);
};

// Delete employee
export const deleteEmployee = async (id) => {
	const empDoc = doc(db, "employees", id);
	return await deleteDoc(empDoc);
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
