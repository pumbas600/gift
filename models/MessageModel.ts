import mongoose, { model, models, Schema } from 'mongoose';
import MessageData from '../types/MessageData';

mongoose.connect(process.env.MONGODB_URI).then(() => {
	console.log('connected to the database');
});

const messageSchema = new Schema<MessageData>({
	title: {
		type: String,
		required: [true, 'You must specify a title for the message'],
		trim: true,
	},
	message: {
		type: String,
		required: [true, 'You musy specify a message'],
		trim: true,
	},
});

const MessageModel = models.MessageModel || model('Message', messageSchema);

export default MessageModel;
