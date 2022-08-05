import Link from 'next/link';
import { FC, ReactNode } from 'react';
import Container from '../components/Container';
import AnimatedLink from '../components/links/AnimatedLink';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import useMessage from '../hooks/useMessage';

const Message: FC = () => {
	const [code, message] = useMessage();

	function leftAngleComponent(): ReactNode {
		// https://fontawesome.com/icons/angle-left?s=solid
		return (
			<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 512">
				<path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
			</svg>
		);
	}

	if (!message) {
		return <LoadingPlaceholder />;
	}

	return (
		<div className="min-h-[100vh] flex flex-col justify-between">
			<div>
				<div className="py-3">
					<Container className="font-semibold">
						<AnimatedLink>
							<Link href={`/?code=${code}`}>
								<div className="flex flex-row items-center hover:fill-blue-600">
									{leftAngleComponent()}
									Back to Card
								</div>
							</Link>
						</AnimatedLink>
					</Container>
				</div>
				<Container>
					<div className="flex flex-col justify-center text-center gap-8 mt-5">
						<h3 className="lg:text-5xl text-blue-600">{message.title}</h3>
						<p className="lg:text-lg whitespace-pre-wrap">{message.message}</p>
					</div>
				</Container>
			</div>
			<div className="bg-gray-300 py-3 mt-5">
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
