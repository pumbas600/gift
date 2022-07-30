import { FC, ReactNode } from 'react';

interface Props {
	height?: string;
	className?: string;
	children?: ReactNode;
}

const AnimatedLink: FC<Props> = (props) => {
	return (
		<div className={`${props.className ?? ''} hover:text-blue-600 group relative inline-block`}>
			<span>{props.children}</span>
			<span
				className={`
                block absolute ${props.height ?? 'h-0.5'} w-full bg-black group-hover:bg-blue-600
                transition-transform ease-in-out scale-x-0 origin-right group-hover:scale-100
                group-hover:origin-left duration-500 opacity-95`}
			/>
		</div>
	);
};

export default AnimatedLink;
