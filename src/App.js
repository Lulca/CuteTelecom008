
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router'
import Europe from './Europe';
import America from './America';
import Asia from './Asia'
import './App.css';
import classNames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpened: true};
  }

  toggleState() {
    this.setState({isOpened: !this.state.isOpened});
  }

  render() {
    
    let toggle = this.state.isOpened;

    const classes = classNames('toggleClass', {toggle});
    return (
        <Router>
          <div>
            <div className='header'>
              <ul className='items-list'>
                <li className='header-item'>
                  <Link className='link' to='/europe'>Europe</Link>
                </li>
                <li className='header-item'>
                  <Link className='link' to='/asia'>Asia</Link>
                </li>
                <li className='header-item'>
                  <Link className='link' to='/america'>America</Link>
                </li>
                <button onClick={this.toggleState.bind(this)}>
                  <img src='http://bldg5records.com/public/img/mobile-menu.png'/>
                </button>
              </ul>
              </div>
              <hr/>
              <div className={classes} >
                <Match pattern='/europe' component={Europe}></Match>
                <Match pattern='/asia' component={Asia}></Match>
                <Match pattern='/america' component={America}></Match>
              </div>
          </div>
        </Router>
    );
  }
}

export default App;
