import { ITarefa } from '../../types/tarefas';
import { Item } from './Item';
import styles from './Lista.module.scss';

export function Lista({ tarefas }: { tarefas: ITarefa[] }) {
	return (
		<aside className={styles.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item, index) => (
					<Item
						key={index}
						{...item}
					/>
				))}
			</ul>
		</aside>
	);
}
