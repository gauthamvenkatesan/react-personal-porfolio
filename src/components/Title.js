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
        this.titleInterval = setInterval(() => this.setState({fadeIn : !this.state.fadeIn}),7000); 
    }

    render(){
        return (
            <div className="carrer-info">
                <p>Accomplished senior full stack developer with 13 years of hands-on experience in software
                development.</p>
                <p>Proven track record of delivering highly scalable and fault-tolerant enterprise technology
                solutions in Banking, Financial Services, Insurance (BFSI) and Retail domain.</p>
                <p>Extensive experience in Web app development using Frontend frameworks such as ReactJS, Angular and
                technologies such as HTML5, CSS3, JavaScript, RxJS, Redux, JSX, TypeScript.
                Strong experience in design, development, automated testing, and deployment of Spring Boot
                Microservices on the AWS.</p>
            </div>
        )
    }
}

export default Title;