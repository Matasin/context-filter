import React, { Component } from 'react';
import logo from './logo.svg';
import { PeopleProvider } from './context/people';

import Filter from './people/Filter';
import People from './people/People.jsx';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>React Exercise - Filter</h2>
                    <p className='App-header__intro'>
                        Visit&nbsp;
            <a href='https://github.com/blisher/react_filter_exercise'>this repository</a>
            &nbsp;for instructions.
          </p>
                </div>
                <PeopleProvider>
                    <div className='App-wrapper'>
                        <Filter />
                        <People />
                    </div>
                </PeopleProvider>
            </div>
        );
    }
}

export default App;
