import { FC, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const Envelope: FC<Props> = (props) => {
	return <div>{props.children}</div>;
};

export default Envelope;
