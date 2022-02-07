import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Components

// npm install --save prop-types

import Person from './components/Person';

const App = () => {
	const [data, setData] = useState({});

	// console.log(process.env);

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BASE_URL}api_key=${process.env.REACT_APP_API_KEY}`
		).then((res) => setData(res.data));
	}, []);

	return (
		<div className='App'>
			<h1>Env Variables & PropTypes</h1>
			<Person
				name='Daniel Di Salvo'
				age={36}
				email='email@test.com'
				isMarried={false}
				children={['Francesca', 'Benito']}
			/>
			<h2>{data.title}</h2>
			<img src={data.hdurl} alt={data.title} />
			<p>{data.explanation}</p>
		</div>
	);
};

export default App;
