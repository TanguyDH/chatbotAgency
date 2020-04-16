import React, { Component } from 'react'
import './strategy.scss';
import { MdPhoneIphone, MdSms } from "react-icons/md"
import { IoIosOptions} from 'react-icons/io';




 class Stategy extends Component {
  render() {
    return (
      <div className={"strategy"}>
        <h3> Our Strategy for High-Performance chatbots</h3>

        <div className={"flex"}>
          <div className="box box1">
            <div className={"iconBox"}>
              <MdSms />
            </div>
            <p className={"text"}>
            We listen carefully to you and your customers so your bot can intelligently fulfill all needs and questions.
            </p>
          </div>

          <div className="box box2">
            <div className={"iconBox"}>
              <IoIosOptions />
            </div>
            <p className={"text"}>
            We create language, visuals and dialogues that engage and build trust.
            </p>
          </div>

          <div className="box box3">
            <div className={"iconBox"}>
              <MdPhoneIphone />
            </div>
            <p className={"text"}>
             We create reliable bots that use the latest techniques and marketing strategies.
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default Stategy
