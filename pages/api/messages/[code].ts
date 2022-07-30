import { NextApiRequest, NextApiResponse } from 'next';
import MessageData from '../../../types/MessageData';
import { ErrorResponse, OkResponse } from '../../../types/Responses';

export default function handler(req: NextApiRequest, res: NextApiResponse<OkResponse<MessageData> | ErrorResponse>) {
	const code = req.query.code as string;
	if (!code) res.status(400).json({ status: 'error', message: 'Missing required code' });

	res.status(200).json({
		status: 'success',
		data: { title: 'Happy Birthday Josh!', message: 'I hope you had an absolutely fantastic day :)' },
	});
}
