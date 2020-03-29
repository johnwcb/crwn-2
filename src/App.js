import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './homepage.component';

const HatsPage = (props) => {
    console.log('hhh', props)
    return (
        <div>
            <h1>HAT PAGE</h1>
        </div>
    )
};
function App(props) {
    console.log('aapp', props)
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
