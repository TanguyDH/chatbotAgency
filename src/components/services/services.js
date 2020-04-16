import React, { Component } from 'react'
import servicesStyle from './services.module.scss';

 class Services extends Component {
  render() {
    return (
      <div className={servicesStyle.services}>
        <h3>We build Chatbots for Businesses.</h3>

        <div className={servicesStyle.flex}>
          <div>
            <h4>Interact with clients 24/7</h4>
            <p>
              Give immediate, perfect Customer Service and answer FAQs. All
              fully automated.
            </p>
          </div>

          <div>
            <h4>Generate and verify leads</h4>
            <p>
              Bots can automatically send follow-up messages to create lasting,
              valuable relationships.
            </p>
          </div>

          <div>
            <h4>Sell</h4>
            <p>
              Facebook Messenger bots have beautifully crafted galleries. The
              products you show can be tailored to the wishes of that specific
              customer.
            </p>
          </div>

          <div>
            <h4>Marketing</h4>
            <p>
              The bot will include all the informative and educational messages
              necessary, and re-target with automated ease.
            </p>
          </div>

          <div>
            <h4>Automate everything</h4>
            <p>
              The bot flawlessly and immediately integrates with Google,
              Clickfunnels, Mailchimp, even Agenda-setting platforms.
            </p>
          </div>

          <div>
            <h4>Build trust</h4>
            <p>
              Your messages will be right there in Messenger where customers
              also communicate with their close friends and family.
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default Services;