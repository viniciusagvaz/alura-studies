import React from 'react';
import styles from './Botao.module.scss';

export class Botao extends React.Component {
	render() {
		return <button className={styles.botao}>Botão</button>;
	}
}
