import mongoose from "mongoose";

export async function connectToDatabase() {
	try {
		mongoose.connect(process.env.MONGODB_URI!);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("Connected to MongoDB successfully");
		});
		connection.on("error", (err) => {
			console.log("MongoDB connection error:", err);
		});
	} catch (error) {
		console.log("Database connection error:", error);
	}
}
