import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://drharisudan007:ange@cluster0.xgd2l5b.mongodb.net/');
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
