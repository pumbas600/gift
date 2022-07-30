import styles from './Envelope.module.css';
import { FC, MouseEvent, MutableRefObject, ReactNode, useState } from 'react';
import OutsideClickHandler from './OutsideClickHandler';

interface Props {
	children?: ReactNode;
	ignore?: MutableRefObject<null | HTMLDivElement>[];
}

const Envelope: FC<Props> = (props) => {
	const [show, setShow] = useState(false);

	function handleToggle(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
		const target = e.target as Node;

		if (!props.ignore?.some((ref) => ref.current?.contains(target))) {
			setShow((show) => !show);
		}
	}

	return (
		<div className="relative w-full h-[100vh] flex items-center justify-center">
			<div className={styles.contact}>
				<h3 className="mt-5">Click to open :)</h3>
				<OutsideClickHandler onClickOutside={() => setShow(false)}>
					<div className={`${styles.envelope} ${show ? styles.show : ''}`} onClick={handleToggle}>
						<div className={styles.top}>
							<div className={styles.outer}>
								<div className={styles.inner}></div>
							</div>
						</div>
						<div className={styles.bottom}></div>
						<div className={styles.left}></div>
						<div className={styles.right}></div>
						<div className={styles.cover}></div>
						<div className={styles.paper}>{props.children}</div>
					</div>
				</OutsideClickHandler>
			</div>
		</div>
	);
};

export default Envelope;
