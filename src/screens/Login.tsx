import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Auth, User } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Button from '../components/Button';

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
			<Button 
				title={ loading 
					? 'Cargando...'
					: 'Ingresar con Google'
				}
				onClick={login}
				type='primary'
				disabled
			/>
		</div>
	);
}

export default Login;
