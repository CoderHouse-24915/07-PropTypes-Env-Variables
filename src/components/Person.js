import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		border: '2px solid red',
		width: 300,
		height: '300px',
	},
};

const Person = ({ name, age, email, isMarried, children }) => {
	return (
		<div style={styles.container}>
			<h1>{name}</h1>
			<h2>{age}</h2>
			<p>{email}</p>
			<p>{isMarried.toString()}</p>
			{children.map((child, idx) => {
				return <li key={idx}>{child}</li>;
			})}
		</div>
	);
};

Person.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	email: PropTypes.string,
	isMarried: PropTypes.bool,
	child: PropTypes.arrayOf(PropTypes.string),
};

export default Person;
