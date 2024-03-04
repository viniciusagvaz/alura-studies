import { Botao } from '../Botao';
import { Relogio } from './Relogio';
import styles from './Cronometro.module.scss';

import { tempoParaSegundos } from '../../common/utils/tempo';
import { ITarefa } from '../../types/tarefas';
import { useEffect, useState } from 'react';

interface Props {
	selecionado?: ITarefa;
	finalizarTarefa: () => void;
}

export function Cronometro({ selecionado, finalizarTarefa }: Props) {
	const [tempo, setTempo] = useState<number>();

	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado]);

	function regressiva(contador: number = 0) {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				return regressiva(contador - 1);
			}
			finalizarTarefa();
		}, 1000);
	}

	return (
		<div className={styles.cronometro}>
			<p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
			<div className={styles.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Botao onClick={() => regressiva(tempo)}>Começar</Botao>
		</div>
	);
}
