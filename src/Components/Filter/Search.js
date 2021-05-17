import React, { Component } from 'react';

const Search = ({props}) => {
	return (
		<div className='searchFilter'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default Search;