import React from 'react';
import { Link, Match, Redirect } from 'react-router';
import russia from './img/Russia.png';
import kazakhstan from './img/Kazakhstan.png';
import china from './img/China.png';

const Russia = ({params}) => {
	return (
		<div>
			<h3>Russia</h3>
			<img alt='img' src={russia}/>
		</div>
	);
};

const Kazakhstan = ({params}) => {
	return (
		<div>
			<h3>Kazakhstan</h3>
			<img alt='img' src={kazakhstan}/>
		</div>
	);
};


const China = ({params}) => {
	return (
		<div>
			<h3>China</h3>
			<img alt='img' src={china}/>
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
			<Redirect to={`${pathname}/russia`} />
			<Match exactly pattern={`${pathname}/russia`} component={Russia}/>
			<Match exactly pattern={`${pathname}/kazakhstan`} component={Kazakhstan}/>
			<Match exactly pattern={`${pathname}/china`} component={China}/>
		</div>
	);
};

export default Asia;	