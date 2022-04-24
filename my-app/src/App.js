import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Results from './components/Results'
import Home from './components/Home'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/results' element={<Results />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
