import React,{useState, attendance} from 'react';

import './App.css';
import Login from './login';
import Admin from './components/Admin'
import {Routes, Route} from 'react-router-dom'
import Boss from './components/Boss';
import Employ from './components/employ';


function App() {
	const [vacationRequests, setVacationRequests] = useState([]);
	return(
		<div>
			
			<Routes>
			
			<Route path='/' element={<Login/>}/>
			<Route path='/admin' element={<Admin vacationRequests={vacationRequests}/>}/>
			<Route path='/employ' element={<Employ setVacationRequests={setVacationRequests} vacationRequests={vacationRequests}/>}/>
			<Route path='/boss' element={<Boss/>}/>
			
		
			
			</Routes>

		</div>
	)
}	
;

export default App;
