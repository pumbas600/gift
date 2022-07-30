import { FC } from 'react';
import Container from './Container';

const LoadingPlaceholder: FC = () => {
	return (
		<Container>
			<div className="bg-blue-600 mx-auto px-6 py-3 flex flex-row gap-4 rounded-md items-center justify-center mt-10">
				<svg
					className="animate-spin -ml-1 mr-3 h-7 w-7 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<h4 className="text-white">Loading...</h4>
			</div>
		</Container>
	);
};

export default LoadingPlaceholder;