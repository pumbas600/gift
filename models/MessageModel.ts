import { model, models, Schema } from 'mongoose';

interface MessageData {
	title: string;
	message: string;
}

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

const MessageModel = models.Message || model('Message', messageSchema);

export default MessageModel;
export type { MessageData };
