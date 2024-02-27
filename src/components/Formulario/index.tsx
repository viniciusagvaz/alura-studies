import * as React from 'react';
import styles from './Formulario.module.scss';
import { Botao } from '../Botao';
import { ITarefa } from '../../types/tarefas';
import { v4 as uuidv4 } from 'uuid';

export class Formulario extends React.Component<{
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
	state = {
		tarefa: '',
		tempo: '00:00:00',
	};

	adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.setTarefas(tarefasAntigas => [
			...tarefasAntigas,
			{
				...this.state,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		this.setState({ tarefa: '', tempo: '00:00' });
	}

	render() {
		return (
			<form
				className={styles.novaTarefa}
				onSubmit={this.adicionarTarefa.bind(this)}
			>
				<div className={styles.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						value={this.state.tarefa}
						onChange={event =>
							this.setState({
								...this.state,
								tarefa: event.target.value,
							})
						}
						placeholder="O que você quer estudar ?"
						required
					/>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="tempo">Tempo</label>
					<input
						type="time"
						step="1"
						name="tempo"
						value={this.state.tempo}
						onChange={event => {
							this.setState({
								...this.state,
								tempo: event.target.value,
							});
						}}
						id="tempo"
						min="00:00:00"
						max="01:30:00"
						required
					/>
				</div>

				<Botao type="submit">Adicionar</Botao>
			</form>
		);
	}
}
