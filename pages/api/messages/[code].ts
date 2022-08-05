import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse, OkResponse } from '../../../types/Responses';
import MessageModel, { MessageData } from '../../../models/MessageModel';
import connectDatabase from '../../../utils/ConnectDatabase';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<OkResponse<MessageData> | ErrorResponse>
) {
	const code = req.query.code as string;
	if (!code) res.status(400).json({ status: 'error', message: 'Missing required code' });

	try {
		await connectDatabase();

		const message = await MessageModel.findById(code);
		if (message) {
			res.status(200).json({
				status: 'success',
				data: { title: message.title, message: message.message },
			});
			return;
		}
	} catch (err) {}
	res.status(404).json({
		status: 'error',
		message: `There is no message with the code ${code}`,
	});
}
