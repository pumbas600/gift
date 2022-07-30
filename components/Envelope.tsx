import styles from './Envelope.module.css';
import { FC, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const Envelope: FC<Props> = (props) => {
	return (
		// <div className="relative">
		// 	<div className="absolute lg:h-[400px] lg:w-[800px] h-[200px] w-full bg-gray-700 transition-all duration-300 hover:delay-150 hover:-mt-[20px]">
		// 		<div
		// 			className="absolute -top-[3px] w-full lg:h-[300px] h-[160px] z-30 overflow-hidden origin-top transition-transform duration-300 hover:transition-transform hover:delay-150 hover:h-[20px] hover:-top-[120px]
		// 					hover:rotate-180"
		// 		>
		// 			<div className="absolute b-0 l-0 border-l-[83px] border-r-[82px] border-solid border-transparent border-t-[#EEE] bt-[70px]">
		// 				<div className="absolute -left-[81px] -top-[73px] border-l-[81px] border-r-[80px] border-solid border-transparent border-t-[#333] border-t-[68px]" />
		// 			</div>
		// 			<div className="bottom absolute z-20 bottom-0 left-[2px] border-l-[81px] border-r-[80px] border-solid border-transparent border-b-[45px] border-t-[#333]" />
		// 			<div className="left" />
		// 			<div className="right" />
		// 			<div className="cover" />
		// 		</div>
		// 		<div>{props.children}</div>
		// 	</div>
		// </div>
		<div className={styles.contact}>
			<div className={styles.envelope}>
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
	);
};

export default Envelope;
