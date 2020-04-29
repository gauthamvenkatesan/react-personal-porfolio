import React, { Component } from 'react';


class Title extends Component{

    constructor(){
        super();
        this.state = {fadeIn : false};
    }

    componentDidMount(){
        this.animateTile();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
    }

    animateTile = () =>{ 
        this.titleInterval = setInterval(() => this.setState({fadeIn : !this.state.fadeIn}),3000); 
    }

    render(){
        return (
            <p className={this.state.fadeIn ? 'text-fade-in' : 'text-fade-out'}>I am a full stack developer. I love my daughter RAKSHA</p>
        )
    }
}

export default Title;