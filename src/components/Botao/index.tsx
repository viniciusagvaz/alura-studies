import React from 'react';
import styles from './Botao.module.scss';

interface IProps {
	children: React.ReactNode;
}

export class Botao extends React.Component<IProps> {
	render() {
		return <button className={styles.botao}>{this.props.children}</button>;
	}
}
