/*
* Componente de ejemplo para TSX
*/

// Importamos React
// Importamos el tipo Functional Component
// Importamos la función useState
import React, { FC, useState } from 'react';

// Definimos los tipos de propiedades que recibe el componente
type props = {
	title: string;
};

// Creamos el componente
const Test: FC<props> = ({title}) => {
	// Estados
	const [active,setActive] = useState(false);
	// ...

	// Otras constantes
	function toggleActive () {
		active
			? setActive(false)
			: setActive(true);
	}
	
	// Estilo
	const style = {
		backgroundColor: active ? '#023' : '#FFF',
		color: active ? '#FFF' : '#023',
		border: '1px #DEF',
		borderRadius: '.5em',
		'&:hover' : {
			backgroundColor: active ? '#223' : '#BCD',
		}
	};
	
	return (
		<button style={style} onClick={toggleActive}>
			<h2>{title}</h2>
		</button>
	);
};

// Exporta el Componente
export default Test;
