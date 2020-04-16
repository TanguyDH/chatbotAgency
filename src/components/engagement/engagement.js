import React, { Component } from 'react'
import engagementStyle from './engagement.module.scss'
import ReactPlayer from "react-player"

class Engagement extends Component {
  render() {
    return (
      <div className={engagementStyle.engagement}>
        <div>
          <h3>Chatbots are powerful automated tools</h3>
          <ReactPlayer
            className={engagementStyle.video}
            url="https://www.youtube.com/watch?v=wL7-PoiBiKM"
            controls
            width="100%"
          />
        </div>
      </div>
    )
  }
}

export default Engagement;