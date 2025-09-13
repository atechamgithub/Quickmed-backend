import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectDB = async () => {
	try {
		console.log("MONGO_URI: ", process.env.MONGO_URI);
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};

// Do not use '@' symbol in your databse user's password else it will show an error.

//N20Sc5xNNmUvd7iC   password

//mongodb+srv://srivastavadarsh176:N20Sc5xNNmUvd7iC@cluster0.fhx2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0