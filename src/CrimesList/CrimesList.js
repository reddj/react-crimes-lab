import React from 'react'

const CrimesList = (props) => {
	console.log(props)
	const crimesList = props.crimes.map((crime, index) => {
		return <li key={index}>{crime.description}</li>
	})
	return (
	<div>
		<h3>Crimes</h3>
		<ul>
			{crimesList}
		</ul>
	</div>
	)
    
}

export default CrimesList