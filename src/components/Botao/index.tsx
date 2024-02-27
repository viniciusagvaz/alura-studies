import React from 'react';
import styles from './Botao.module.scss';

interface Iprops {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

export class Botao extends React.Component<Iprops> {
	render() {
		const { type = 'button' } = this.props;

		return (
			<button
				type={type}
				className={styles.botao}
			>
				{this.props.children}
			</button>
		);
	}
}
