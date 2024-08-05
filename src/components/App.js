import React, {Component} from 'react';
import Projects from './Projects';
import SociaProjects from './SocialProfiles';
import Title from './Title';

import profile from '../assets/profile_2.jpg';

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
                <div className='bg-image'>
                <img src={profile} alt='profile' className='profileImg'/> </div>
                <h1>Hello I am Gautham Venkatesan</h1>
                <Title/>
                <p className="carrer-info">I always look forward to work on new technologies and enhance my skillset</p>
                
                {this.state.displayBio ? 
                <div >
                    <div className="carrer-info"><p>Live in Toronto Ontario</p>
                        <p>I get excited how technology and software is changing the world.</p>
                        <p>Upon stumbing on free time I play badminton, wood working in my garage or just love to do hiking!</p>
                    </div>
                    <button className="center-it btn btn-sm btn-default" onClick={this.toggleDisplayBio}>Read Less</button>
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











