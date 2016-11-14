import React from 'react';
import { Link, Match } from 'react-router';

const Canada = ({params}) => {
	return (
		<div>
			<h3>Canada</h3>
			<img alt='img' src='http://www.clipartkid.com/images/99/description-flag-map-of-the-united-states-canada-png-u5kTnT-clipart.png'/>
		</div>
	);
};

const Usa = ({params}) => {
	return (
		<div>
			<h3>Usa</h3>
			<img alt='img' src='http://vignette3.wikia.nocookie.net/fictionvision/images/3/3a/2000px-USA_Flag_Map.svg.png/revision/latest?cb=20120211221129'/>
		</div>
	);
};


const Brazil = ({params}) => {
	return (
		<div>
			<h3>Brazil</h3>
			<img alt='img' src='http://vignette3.wikia.nocookie.net/assassinscreed/images/8/8b/526px-Map_of_Brazil_with_flag.png/revision/latest?cb=20100210025955'/>
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