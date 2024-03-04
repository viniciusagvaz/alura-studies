import React from 'react';
import styles from './Botao.module.scss';

interface Iprops {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
}

export function Botao({ onClick, type, children }: Iprops) {
	return (
		<button
			onClick={onClick}
			type={type}
			className={styles.botao}>
			{children}
		</button>
	);
}

// class Botao1 extends React.Component<Iprops> {
// 	render() {
// 		const { type = 'button', onClick } = this.props;
// 	}
// }
