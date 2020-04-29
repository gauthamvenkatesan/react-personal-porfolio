import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import App from './components/App';
import './index.css'
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render ={()=> <Header><App/></Header>}/>
            <Route exact path='/jokes' render ={()=> <Header><Jokes/></Header>}/>
            <Route exact path='/music-master' render ={()=> <Header><MusicMaster/></Header>}/>
        </Switch>
    </Router>
    ,document.getElementById('root'));
