import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import Container from '../components/Container';
import AnimatedLink from '../components/links/AnimatedLink';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import MessageData from '../types/MessageData';
import { ErrorResponse, OkResponse } from '../types/Responses';

const Message: FC = () => {
	const router = useRouter();
	const code = router.query.code;
	const [message, setMessage] = useState<MessageData | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res: OkResponse<MessageData> | ErrorResponse = await (await fetch(`api/messages/${code}`)).json();
				if (res.status === 'success') {
					setMessage(res.data);
				}
			} catch (err) {
				console.error(err);
			}
		}

		if (code) {
			fetchData();
		}
	}, [code]);

	if (!message) {
		return <LoadingPlaceholder />;
	}

	return (
		<div className="h-[100vh] flex flex-col justify-between">
			<div>
				<div className="py-3">
					<Container className="font-semibold">
						<AnimatedLink>
							<Link href={`/?code=${code}`}>Back to Card</Link>
						</AnimatedLink>
					</Container>
				</div>
				<Container>
					<div className="flex flex-col justify-center text-center gap-8 mt-10">
						<h3 className="lg:text-5xl text-blue-600">{message.title}</h3>
						<p className="lg:text-lg">{message.message}</p>
					</div>
				</Container>
			</div>
			<div className="bg-gray-300 py-3">
				<Container className="font-semibold text-center">
					Built with ❤️ by{' '}
					<AnimatedLink>
						<a target="_blank" rel="noreferrer" href="https://github.com/pumbas600">
							pumbas600
						</a>
					</AnimatedLink>
				</Container>
			</div>
		</div>
	);
};

export default Message;
