import React, { useState } from 'react';

import { Formulario } from '../components/Formulario';
import { Lista } from '../components/Lista';
import styles from './App.module.scss';
import { Cronometro } from '../components/Cronometo';
import { ITarefa } from '../types/tarefas';

export function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	return (
		<div className={styles.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista tarefas={tarefas} />
			<Cronometro />
		</div>
	);
}
