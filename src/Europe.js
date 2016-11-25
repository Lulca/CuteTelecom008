import React from 'react';
import { Link, Match, Redirect } from 'react-router';
import ukraine from './img/Ukraine.png';
import france from './img/France.png';
import spain from './img/Spain.png';

const Ukraine = ({params}) => {
	return (
		<div>
			<h3>Ukraine</h3>
			<img alt='img' src={ukraine}/>
		</div>
	);
};

const France = ({params}) => {
	return (
		<div>
			<h3>France</h3>
			<img alt='img' src={france}/>
		</div>
	);
};


const Spain = ({params}) => {
	return (
		<div>
			<h3>Spain</h3>
			<img alt='img' src={spain}/>
		</div>
	);
};

const Europe = ({pathname}) => {
	return (
		<div className='country-bg'>
			<h2>Europe</h2>
			<ul className='item-container'>
				<li className='country-item'><Link className='country-link' to={`${pathname}/ukraine`}>Ukraine</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/france`}>France</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/spain`}>Spain</Link></li>
			</ul>
			<Redirect to={`${pathname}/ukraine`} />
			<Match exactly pattern={`${pathname}/ukraine`} component={Ukraine}/>
			<Match exactly pattern={`${pathname}/france`} component={France}/>
			<Match exactly pattern={`${pathname}/spain`} component={Spain}/>
		</div>
	);
};

export default Europe;	