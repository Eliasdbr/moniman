/*
* Componente de Botón
*/

// Importamos React
// Importamos el tipo Functional Component
import { FC } from 'react';

// Definimos los tipos de propiedades que recibe el componente
type props = {
	title?: string;
	onClick: ()=>{};
	icon?: string;
	type?: 'primary' | 'secondary';
	disabled?: boolean;
};

// Creamos el componente
const Button: FC<props> = ({
	title = 'Button',
	onClick = () => {},
	icon,
	type = 'primary',
	disabled,
}) => {
	// Estilo
	const style = `
		flex justify-center rounded p-2 disabled:shadow-none
		${{
			primary: `
				text-white bg-green-500 shadow 
				hover:bg-green-400 
				active:bg-green-700 active:shadow-inset
				disabled:text-gray-400 disabled:bg-gray-200
			`,
			secondary: `
				text-[gray] shadow 
				active:shadow-inset active:bg-black/10
			`,
		}[type]}
	`;
	
	return (
		<button className={style} onClick={onClick} disabled={disabled}>
			{icon || null}
			<h2>{title}</h2>
		</button>
	);
};

// Exporta el Componente
export default Button;
