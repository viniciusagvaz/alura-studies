import React from 'react';

import { Formulario } from '../components/Formulario';
import { Lista } from '../components/Lista';
import styles from './App.module.scss';
import { Cronometro } from '../components/Cronometo';

export function App() {
	return (
		<div className={styles.AppStyle}>
			<Formulario />
			<Lista />
			<Cronometro />
		</div>
	);
}
