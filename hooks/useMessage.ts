import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MessageData } from '../models/MessageModel';
import { ErrorResponse, OkResponse } from '../types/Responses';

function useMessage(): [string, MessageData | null] {
	const router = useRouter();
	const code = router.query.code as string;
	const [message, setMessage] = useState<MessageData | null>(null);

	useEffect(() => {
		async function fetchData() {
			const cached = localStorage.getItem(code);
			if (cached) setMessage(JSON.parse(cached));

			try {
				const res: OkResponse<MessageData> | ErrorResponse = await (await fetch(`api/messages/${code}`)).json();
				if (res.status === 'success') {
					localStorage.setItem(code, JSON.stringify(res.data));
					setMessage(res.data);
					console.log('Fetched message');
				}
			} catch (err) {
				console.error(err);
			}
		}

		if (code) {
			fetchData();
		}
	}, [code]);

	return [code, message];
}

export default useMessage;
