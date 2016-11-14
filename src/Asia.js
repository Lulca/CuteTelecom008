import React from 'react';
import { Link, Match } from 'react-router';

const Russia = ({params}) => {
	return (
		<div>
			<h3>Russia</h3>
			<img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag-map_of_Russia.svg/2000px-Flag-map_of_Russia.svg.png'/>
		</div>
	);
};

const Kazakhstan = ({params}) => {
	return (
		<div>
			<h3>Kazakhstan</h3>
			<img alt='img' src='http://mapsof.net/uploads/static-maps/Kazakhstan_flag_map.png'/>
		</div>
	);
};


const China = ({params}) => {
	return (
		<div>
			<h3>China</h3>
			<img alt='img' src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_map_of_the_People's_Republic_of_China.png"/>
		</div>
	);
};

const Asia = ({pathname}) => {
	return (
		<div className='country-bg'>
			<h2>Asia</h2>
			<ul className='item-container'>
				<li className='country-item'><Link className='country-link' to={`${pathname}/russia`}>Russia</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/kazakhstan`}>Kazakhstan</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/china`}>China</Link></li>
			</ul>
			<Match exactly pattern={`${pathname}/russia`} component={Russia}/>
			<Match exactly pattern={`${pathname}/kazakhstan`} component={Kazakhstan}/>
			<Match exactly pattern={`${pathname}/china`} component={China}/>
		</div>
	);
};

export default Asia;	