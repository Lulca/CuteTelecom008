import React from 'react';
import { Link, Match } from 'react-router';

const Ukraine = ({params}) => {
	return (
		<div>
			<h3>Ukraine</h3>
			<img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Outline_of_Ukraine.svg/2000px-Outline_of_Ukraine.svg.png'/>
		</div>
	);
};

const France = ({params}) => {
	return (
		<div>
			<h3>France</h3>
			<img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_map_of_Greater_France.png'/>
		</div>
	);
};


const Spain = ({params}) => {
	return (
		<div>
			<h3>Spain</h3>
			<img alt='img' src='http://www.lacasaagency.com/web/img/spain2.png'/>
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
			<Match exactly pattern={`${pathname}/ukraine`} component={Ukraine}/>
			<Match exactly pattern={`${pathname}/france`} component={France}/>
			<Match exactly pattern={`${pathname}/spain`} component={Spain}/>
		</div>
	);
};

export default Europe;	