import styles from './Envelope.module.css';
import { FC, ReactNode, useState } from 'react';

interface Props {
	children?: ReactNode;
}

const Envelope: FC<Props> = (props) => {
	const [show, setShow] = useState(false);

	return (
		<div className="relative w-full h-[100vh] flex items-center justify-center">
			<div className={styles.contact} onClick={() => setShow((show) => !show)}>
				<div className={`${styles.envelope}  ${show ? styles.show : ''}`}>
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
			</div>
		</div>
	);
};

export default Envelope;
