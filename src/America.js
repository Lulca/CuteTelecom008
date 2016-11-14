import React from 'react';
import { Link, Match } from 'react-router';
import canada from './img/Canada.png';
import usa from './img/USA.png';
import brazil from './img/Brazil.png';
const Canada = ({params}) => {
	return (
		<div>
			<h3>Canada</h3>
			<img alt='img' src={canada}/>
		</div>
	);
};

const Usa = ({params}) => {
	return (
		<div>
			<h3>Usa</h3>
			<img alt='img' src={usa}/>
		</div>
	);
};


const Brazil = ({params}) => {
	return (
		<div>
			<h3>Brazil</h3>
			<img alt='img' src={brazil}/>
		</div>
	);
}; 

const America = ({pathname}) => {
	return (
		<div className='country-bg'>
			<h2>America</h2>
			<ul className='item-container'>
				<li className='country-item'><Link className='country-link' to={`${pathname}/canada`}>Canada</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/usa`}>USA</Link></li>
				<li className='country-item'><Link className='country-link' to={`${pathname}/brazil`}>Brazil</Link></li>
			</ul>
			<Match exactly pattern={`${pathname}/canada`} component={Canada}/>
			<Match exactly pattern={`${pathname}/usa`} component={Usa}/>
			<Match exactly pattern={`${pathname}/brazil`} component={Brazil}/>
		</div>
	);
};

export default America;