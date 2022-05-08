/*
* Componente de ejemplo para TSX
*/

// Importamos React
// Importamos el tipo Functional Component
// Importamos la función useState
import React, { FC, useState } from 'react';

// Traemos el JSON con los datos falsos
import mockData from '../../MOCK_DATA.json';
// Convertimos el array de objetos al array de strings
const namesList = mockData.map( obj => obj.name );

// Definimos los tipos de propiedades que recibe el componente
interface FilterStateType {
	[key: string]: number | string
}
const initialFilterState: Record<string,(number | string)> = {
	maxLabels: 100,
	maxChars: -1,
	separator: ', ',
};

// Creamos el componente
const Labels: FC = () => {
	// Estados
	const [fullText, setFullText] = useState(namesList.join());
	const [hovering, setHovering] = useState(false);
	const [filters, setFilters] = useState(initialFilterState);
	
	// Estilo
	const pStyle = {
		transition: 'all .25s cubic-bezier(0.19, 1, 0.22, 1)',
		padding: '1em',
		width: '50vw',
		backgroundColor: '#FFF',
		color: '#023',
		borderRadius: '.5em',
		lineClamp: '1',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: hovering ? 'normal' : 'nowrap',
	};
	const iStyle = {
		fontSize: '1em',
		padding: '.25em',
		font: 'inherit',
	};
	const iContStyle = {
		margin: '1em',
	};

	// Event Handlers
	function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		if (typeof filters[inputName] === 'number') 
			setFilters( (prevState) => {
				return {...prevState, [inputName]: parseInt(inputValue || '0')};
			});
		else
			setFilters(() => {
				return {...filters, [inputName]: inputValue}
			});

		let textArray = namesList;
		let text = '';
		// Comenzamos a procesar los datos
		if (typeof filters.maxLabels === 'number') { 
			textArray = namesList.slice(0,filters.maxLabels);
		}
		if (typeof filters.separator === 'string') { 
			text = textArray.join(filters.separator);
		}
		if (typeof filters.maxChars === 'number') { 
			text = text.slice(0,filters.maxChars);
		}
		setFullText(() => text);
	}

	return (<>
		<p style={pStyle as React.CSSProperties} 
			onMouseOver={() => setHovering(true)}
			onMouseOut={() => setHovering(false)}
		>
			{fullText}
		</p>
		{/* Input Max Labels */}
		<div style={iContStyle}>
			<label>Max Labels:</label>
			<input style={iStyle} type="number" name="maxLabels" 
				onChange={inputChange} value={filters.maxLabels}
			/>
		</div>
		{/* Input Max Chars */}
		<div style={iContStyle}>
			<label>Max Chars:</label>
			<input style={iStyle} type="number" name="maxChars" 
				onChange={inputChange} value={filters.maxChars}
			/>
		</div>
		{/* Input Separator */}
		<div style={iContStyle}>
			<label>Separator:</label>
			<input style={iStyle} type="text" name="separator" 
				onChange={inputChange} value={filters.separator}
			/>
		</div>
	</>);
};

// Exporta el Componente
export default Labels;
