import { FC, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const Container: FC<Props> = (props) => {
	return (
		<div className="lg:w-[1000px] lg:mx-auto w-full">
			<div className="mx-5">{props.children}</div>
		</div>
	);
};

export default Container;
