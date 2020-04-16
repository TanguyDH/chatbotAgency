import React, { Component } from 'react';
import mainStyle from './main.module.scss';
import chatbot from '../../assets/img/chatbot.png';


class Main extends Component {
  render() {
 
    return (
      <div className={mainStyle.main}>
        <div className={mainStyle.container}>
          <div>
            <h3>More sales.</h3>
            <h3>Save more money.</h3>
            <p>
              Messenger chatbots are the new best way to communicate with
              clients, customers and guests. Messaging apps are the most used app
              and the most engaging.
            </p>
            <a href="https://calendly.com/tanguydeherdt">
              Set an appointment for free advice.
            </a>
          </div>
          <img src={chatbot} alt="img" />
        </div>
      </div>
    )
  }
}



export default Main;



// <a href="">
//   <img src={messenger} alt="img" />
//   Message Us
//           </a>