import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Auth, User } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = ({
	auth,
	user,
}: {
	auth: Auth;
	user: User | null | undefined;
}) => {
	// Hooks
	const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();

	// Funciones
	const login = async() => {
		await signInWithGoogle();
		if (user) navigate('../home');
	}

	// Renderizar componente
	if (user) return <Navigate to='../home'/>;
	return (
		<div>
			<h1>LOGIN</h1>
			<button className='p-2 rounded shadow hover:bg-white/20 active:shadow-none'
				onClick={login}
			>
				{ loading 
					? 'Cargando...'
					: 'Ingresar con Google'
				}
			</button>
		</div>
	);
}

export default Login;
