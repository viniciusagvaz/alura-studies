import styles from './Relogio.module.scss';

export function Relogio() {
	return (
		<>
			<span className={styles.relogioNumero}>0</span>
			<span className={styles.relogioNumero}>0</span>
			<span className={styles.relogioDivisao}>:</span>
			<span className={styles.relogioNumero}>0</span>
			<span className={styles.relogioNumero}>0</span>
		</>
	);
}
