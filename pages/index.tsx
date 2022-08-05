import type { NextPage } from 'next';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';
import Container from '../components/Container';
import Envelope from '../components/Envelope';
import AnimatedLink from '../components/links/AnimatedLink';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import useMessage from '../hooks/useMessage';

const Home: NextPage = () => {
	const linkRef = useRef<HTMLDivElement>(null);
	const [code] = useMessage();

	function arrowComponent(): ReactNode {
		return (
			<svg
				className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] mx-auto text-blue-600 animate-bounce rounded-full shadow-lg p-2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
			</svg>
		);
	}

	return (
		<Container>
			<div className="flex flex-col justify-center text-center">
				<Envelope ignore={[linkRef]}>
					{code ? (
						<Link href={`/message?code=${code}`}>
							<div ref={linkRef} className="flex flex-col lg:gap-8 gap-4">
								<h3 className="text-blue-600">Happy Birthday!</h3>
								<div className="flex flex-col justify-center lg:gap-8 gap-4">
									<div>
										<AnimatedLink>
											<h5 className="whitespace-nowrap">Click here to read message</h5>
										</AnimatedLink>
									</div>
									{arrowComponent()}
								</div>
							</div>
						</Link>
					) : (
						<LoadingPlaceholder />
					)}
				</Envelope>
			</div>
		</Container>
	);
};

export default Home;
