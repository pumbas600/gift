import { FC, MutableRefObject, ReactNode, useEffect, useRef } from 'react';

interface Props {
	onClickOutside: VoidFunction;
	className?: string;
	disable?: boolean;
	ignore?: MutableRefObject<null | HTMLDivElement>[];
	children?: ReactNode;
}

const OutsideClickHandler: FC<Props> = (props) => {
	const ref = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (props.disable) return;

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (
				ref.current &&
				!ref.current?.contains(target) &&
				!props.ignore?.some((ref) => ref?.current?.contains(target))
			) {
				props.onClickOutside();
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [props]);

	return (
		<div className={props.className} ref={ref}>
			{props.children}
		</div>
	);
};

export default OutsideClickHandler;
