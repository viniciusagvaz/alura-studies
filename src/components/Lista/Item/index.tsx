import { ITarefa } from '../../../types/tarefas';
import styles from '../Lista.module.scss';

export function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
	return (
		<li className={styles.item}>
			<h3>{`${tarefa}`}</h3>
			<span>{`${tempo}`}</span>
		</li>
	);
}
