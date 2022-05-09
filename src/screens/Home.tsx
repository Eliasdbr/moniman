import React from 'react';
import { Navigate } from 'react-router-dom';
import { User, signOut, Auth } from 'firebase/auth';

// Componentes
import Button from '../components/Button';

const Home = ({
	auth,
	user,
}: {
	auth: Auth;
	user: User | null | undefined;
}) => {
	// Renderiza el componente
	if (!user) return <Navigate to='../login'/>
	return (
		<div>
			<h1>HOME</h1>
			<h1>Hola, {user.displayName?.split(' ')[0]}!</h1>
			<Button title='Cerrar Sesión'
				onClick={() => signOut(auth)}
				type='primary'
			/>
		</div>
	);
}

export default Home;
