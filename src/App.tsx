import React from 'react';
import { Formulario } from './components/Formulario';
import { Lista } from './components/Lista';

export function App() {
	return (
		<div className={'App'}>
			<Formulario />
			<Lista />
		</div>
	);
}
