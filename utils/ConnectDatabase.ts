import mongoose from 'mongoose';

export default async function connectDatabase() {
	await mongoose.connect(process.env.MONGODB_URI);
}
