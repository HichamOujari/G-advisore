import React, { Component } from 'react'
import "../style/NewProfile.css"

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default class NewProfile extends Component {
    render() {
        return (
            <div id="NewProfileId" className="NewProfile display-none">
                <div className="Content">
                    <div className="header">
                        <p className="title">CREATE PROFILE</p>
                        <div className="Etaps">
                            <div className="first">
                                <p className="title">General</p>
                                <FiberManualRecordIcon  className="icon"/>
                            </div>
                            <p className="second">Shipping</p>
                            <p className="third">Billing</p>
                        </div>
                    </div>
                    <form className="body">
                        <fieldset className="ProfileName">
                            <legend className="title">Profile Name</legend>
                            <input type="text" placeholder="Enter your Profile Name" className="InputProfileName"/>
                        </fieldset>
                        <div className="Email_Phone">
                            <fieldset className="Email">
                                <legend className="title">Email Address</legend>
                                <input type="email" placeholder="Enter Your Email Address" className="InputEmail" />
                            </fieldset>
                            <fieldset className="phone">
                                <legend className="title">Phone Number</legend>
                                <input type="phone" placeholder="Enter your Phone Number" className="InputPhone" />
                            </fieldset>
                        </div>
                        <div className="Card_HoldName">
                            <fieldset className="Card">
                                <legend className="title">Card Number</legend>
                                <input type="text" placeholder="Enter your Card Number" className="InputCard" />
                            </fieldset>
                            <fieldset className="HolderName">
                                <legend className="title">Card Holder Name</legend>
                                <input type="text" placeholder="Enter your Card Holder Name" className="InputHolderName" />
                            </fieldset>
                        </div>
                        <div className="ExpiryMonth_Year">
                            <fieldset className="Month">
                                <legend className="title">Expiry Month</legend>
                                <select className="SelectMonth">
                                    <option value="04">04</option>
                                </select>
                            </fieldset>
                            <fieldset className="Year">
                                <legend className="title">Expiry Year</legend>
                                <select className="SelectYear">
                                    <option value="2024">2024</option>
                                </select>
                            </fieldset>
                        </div>
                        <div className="cvv_type">
                            <fieldset className="cvv">
                                <legend className="title">CVV</legend>
                                <input type="text" placeholder="CVV" className="inputCVV" />
                            </fieldset>
                            <fieldset className="type">
                                <legend className="title">Card Type</legend>
                                <select className="SelectType">
                                    <option value="Master Card">Master Card</option>
                                </select>
                            </fieldset>
                        </div>
                        <div className="checks">
                            <div className="left">
                                <input id="check1" type="checkbox" className="InputLeft" />
                                <p htmlFor="check1" className="title">Billing Same as Shipping</p>
                            </div>
                            <div className="right">
                                <input id="check2" type="checkbox" className="InputRight" />
                                <p htmlFor="check2" className="title">One Checkout per Profile</p>
                            </div>
                        </div>
                        <div className="Btns">
                            <button onClick={(e)=>{
                                e.preventDefault();
                                document.querySelector("#NewProfileId").classList.toggle("display-none")
                            }} className="cancel">CANCEL</button>
                            <button className="NEXT">NEXT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
