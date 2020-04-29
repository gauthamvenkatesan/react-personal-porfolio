import React, {Component} from 'react';
import Projects from './Projects';
import SociaProjects from './SocialProfiles';
import Title from './Title';

import profile from '../assets/profile.jpg';

class App extends Component{

    constructor(){
        super();
        this.state = { displayBio : false};

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){
        return (
            <div>
                <img src={profile} alt='profile' className='profileImg'/>
                <h1>Hello I am Gautham Venkatesan</h1>
                <Title/>
                <p>I always look forward to work on new technologies and enhance my skillset</p>
                
                {this.state.displayBio ? 
                <div>
                    <p>Live in Toronto Ontario</p>
                    <p>It excites me how coding and development scene is changing everyday. I think React is awesome.</p>
                    <p>Upon stumbing on free time I play table tennis and cook Paneer!</p>
                    <button className="btn btn-sm btn-default" onClick={this.toggleDisplayBio}>Read Less</button>
                </div> : <div> <button className="btn btn-sm btn-default" onClick={this.toggleDisplayBio}>Read More</button></div>}
                <hr/>
                <Projects/>
                <hr/>
                <SociaProjects/>
            </div>
        );
    }
}

export default App;











