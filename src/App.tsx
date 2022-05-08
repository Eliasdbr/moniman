// Importando cosas
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Inicializando firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyD9afZKUf9B1qyGv99PTj0e0krZanfawLE",
  authDomain: "edb-moniman.firebaseapp.com",
  projectId: "edb-moniman",
  storageBucket: "edb-moniman.appspot.com",
  messagingSenderId: "401214795219",
  appId: "1:401214795219:web:a4c1c7bf2fa30a85c61326"
});

const auth = getAuth(firebaseApp);


// Componentes
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
	// Hooks
	const [user, loading, error] = useAuthState(auth);
	
	//Renderizar el componente 
	return (
		<div className=''>
		<Routes>
			<Route path='/*' element={
				<Routes>
					<Route path='home' element={<Home auth={auth} user={user}/>}/>
					<Route path='login' element={<Login auth={auth} user={user}/>}/>
					<Route path='/*' element={
						user 
						? <Navigate to='home'/>
						: <Navigate to='login'/>
					}/>
				</Routes>
			}/>
			<Route path='*' element={<h1>URL NOT EXISTENT</h1>} />
		</Routes>
		</div>
	);
}

export default App;
