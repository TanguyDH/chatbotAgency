import React, { Component } from 'react'
import './contact.scss';


class Contact extends Component {

  render() {
    const { t, i18n } = this.props
    return (
      <div id="contact" className="contact">
        <h3>Contact</h3>
        <h4>Send us a message</h4>
        <form
          className="contact__box"
          method="POST"
          action="https://formspree.io/tanguydeherdt@hotmail.com"
        >
          <div className="contact__inputs">
            <input name="name" placeholder="Name" type="text" required />
            <input name="email" placeholder="Email" type="email" required />
          </div>

          <textarea type="text" name="text" placeholder="Text Area" required />

          <button className="contact__button">Send</button>
        </form>
      </div>
    )
  }
}

export default Contact;
