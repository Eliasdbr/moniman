import React from 'react';
import { Navigate } from 'react-router-dom';
import { User, signOut, Auth } from 'firebase/auth';

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
			<button className='p-2 rounded shadow hover:bg-white/20 active:shadow-none'
				onClick={() => signOut(auth)}
			>
				Cerrar Sesión
			</button>
		</div>
	);
}

export default Home;
