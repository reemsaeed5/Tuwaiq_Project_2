import React from 'react';

import './App.css';
import Login from './login';
import Admin from './components/Admin'
import {Routes, Route} from 'react-router-dom'
import Boss from './components/Boss';
import Employ from './components/Employ';

function app() {
	return(
		<div>
			<Routes>
			<Route path='/' element={<Login/>}/>
			<Route path='/admin' element={<Admin/>}/>
			<Route path='/employ' element={<Employ/>}/>
			<Route path='/boss' element={<Boss/>}/>

			</Routes>

		</div>
	)
}	
;

export default app;
