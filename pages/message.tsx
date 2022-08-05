import Link from 'next/link';
import { FC } from 'react';
import Container from '../components/Container';
import AnimatedLink from '../components/links/AnimatedLink';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import useMessage from '../hooks/useMessage';

const Message: FC = () => {
	const [code, message] = useMessage();

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
						<p className="lg:text-lg whitespace-pre-wrap">{message.message}</p>
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
