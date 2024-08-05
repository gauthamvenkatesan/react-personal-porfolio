import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import App from './components/App';
import './index.css'
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master'
import Resume from './components/Resume';

ReactDOM.render(
    <BrowserRouter history={createBrowserHistory()} basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' render ={()=> <Header><App/></Header>}/>
            <Route exact path='/jokes' render ={()=> <Header><Jokes/></Header>}/>
            <Route exact path='/music-master' render ={()=> <Header><MusicMaster/></Header>}/>
            <Route exact path='/resume' render ={()=> <Header><Resume/></Header>}/>
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root'));
