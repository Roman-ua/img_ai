import mongoose from "mongoose";

const connectDB = (url) => {
	mongoose.set('strictQuery', true);

	mongoose.connect(url)
		.then(() => console.log('connected to DB'))
		.catch(() => console.log('something went wrong with DB connection'))
};

export default connectDB;
