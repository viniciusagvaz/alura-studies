import React, { useState } from 'react';

import { Formulario } from '../components/Formulario';
import { Lista } from '../components/Lista';
import styles from './App.module.scss';
import { Cronometro } from '../components/Cronometo';
import { ITarefa } from '../types/tarefas';

export function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function selecionaTarefa(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);
		setTarefas((tarefasAnteriores) =>
			tarefasAnteriores.map((tarefa) => ({
				...tarefa,
				selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
			}))
		);
	}

	function finalizarTarefa() {
		if (selecionado) {
			setSelecionado(undefined);

			setTarefas((tarefasAnteriores) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return {
							...tarefa,
							selecionado: false,
							completado: true,
						};
					}
					return tarefa;
				})
			);
		}
	}

	return (
		<div className={styles.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista
				tarefas={tarefas}
				selecionaTarefa={selecionaTarefa}
			/>
			<Cronometro
				selecionado={selecionado}
				finalizarTarefa={finalizarTarefa}
			/>
		</div>
	);
}
