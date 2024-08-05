import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Touch Typing React Application',
    description: 'A React App that I built using redux and middleware, involving JS and core web dev concepts!',
    link: 'https://github.com/gauthamvenkatesan/tips-on-fire',
    hostedLink: 'https://github.com/gauthamvenkatesan/tips-on-fire',    
    image: project1
  },
  {
    id: 2,
    title: 'Bank Account Distributed System',
    description: 'A CQRS event sourcing architecture with Kafka message queue hosted in AWS',
    link: 'https://github.com/gauthamvenkatesan/bank_account_cqrs',
    hostedLink: 'https://github.com/gauthamvenkatesan/bank_account_cqrs',   
    image: project2
  },
  {
    id: 3,
    title: 'Sport Facility Booking App',
    description: 'You can search for a facility and book the time slot in advance',
    link: 'https://github.com/gauthamvenkatesan/book_a_spot',
    hostedLink: 'Working on it',   
    image: project3
  }
];

export default PROJECTS;
