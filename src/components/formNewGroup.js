import React, { Component } from 'react'
import "../style/FormNewGroup.css"

import CloseIcon from '@material-ui/icons/Close';

export default class FormNewGroup extends Component {
    render() {
        return (
            <div className="FormNewGroup">
                <div className="header">
                    <p className="title">CEATE TASK GROUP</p>
                    <CloseIcon className="icon" />
                </div>
                <form>
                    <div className="DivGroupName">
                        <fieldset className="first">
                            <legend className="title">Group Name</legend>
                            <input type="text" required placeholder="Input group name" className="GroupName"/>
                        </fieldset>
                    </div>
                    <div className="DivGlobalTask">
                        <p className="title">Global Task</p>
                        <div className="first">
                            <fieldset className="FieldStore">
                                <legend className="title">Store</legend>
                                <select className="SELECTStore" required>
                                    <option>Select Store</option>
                                    <option value="1">Store 1</option>
                                    <option value="2">Store 2</option>
                                    <option value="3">Store 3</option>
                                    <option value="4">Store 4</option>
                                </select>
                            </fieldset>
                            <fieldset className="ProductSKU">
                                <legend className="title">Product SKU</legend>
                                <input className="SKUinput" required placeholder="Input Product SKU" />
                            </fieldset>
                        </div>
                        <div className="second">
                            <fieldset className="DIVCountry">
                                <legend className="title">Country</legend>
                                <select className="SelectCountry" required>
                                    <option>Select Country</option>
                                    <option value="1">Country 1</option>
                                    <option value="2">Country 2</option>
                                    <option value="3">Country 3</option>
                                    <option value="4">Country 4</option>
                                </select>
                            </fieldset>
                            <fieldset className="DIVProfileGroup">
                                <legend className="title">Profile Group</legend>
                                <select className="SelectProfile" required>
                                    <option>Select Profile Group</option>
                                    <option value="1">Profile Group 1</option>
                                    <option value="2">Profile Group 2</option>
                                    <option value="3">Profile Group 3</option>
                                    <option value="4">Profile Group 4</option>
                                </select>
                            </fieldset>
                        </div>
                        <div className="third">
                            <p className="title">Select Size :</p>
                            <div>
                                <input type="range" id="RANGE1" className="progressBar bar1" onInput={
                                    (e)=>{
                                        document.querySelector("#EchoRange1").innerHTML=9+document.querySelector("#RANGE1").value/50
                                        document.querySelector("#EchoRange1").style.left=e.target.value*175/100+"px"
                                    }
                                }/>
                                <input type="range" id="RANGE2" className="progressBar bar2" onInput={
                                    (e)=>{
                                        document.querySelector("#EchoRange2").innerHTML=11+document.querySelector("#RANGE2").value/50
                                        document.querySelector("#EchoRange2").style.left=190+e.target.value*175/100+"px"
                                    }
                                } />
                                <div>
                                    <span id="EchoRange1">10.0</span>
                                    <span id="EchoRange2">12.0</span>
                                </div>
                            </div>
                            <p className="EndTitle">Random Size</p>
                        </div>
                    </div>
                    <div className="DIVRegularTask">
                        <p className="title">Regular Task</p>
                        <div className="first">
                            <fieldset className="AProxiesGroup">
                                <legend className="title">Proxies Group</legend>
                                <select required className="SelectProxiesGroup" >
                                    <option >Select Proxies Group</option>
                                    <option value="1">Proxies Group 1</option>
                                    <option value="2">Proxies Group 2</option>
                                    <option value="3">Proxies Group 3</option>
                                    <option value="4">Proxies Group 4</option>
                                </select>
                            </fieldset>
                            <fieldset className="PaymentMethod">
                                <legend className="title">Paymet Method</legend>
                                <select required className="SelectPaymentMethod" >
                                    <option >Select Payment Method</option>
                                    <option value="1">Payment Method 1</option>
                                    <option value="2">Payment Method 2</option>
                                    <option value="3">Payment Method 3</option>
                                    <option value="4">Payment Method 4</option>
                                </select>
                            </fieldset>
                        </div>
                        <fieldset className="QuantityTask">
                            <legend className="title">Quantity Task</legend>
                            <input type="text" placeholder="0 0 0" required className="inputQuantityTask" />
                        </fieldset>
                    </div>
                    <div className="DIVMonitorTask">
                        <p className="title">Monitor Task</p>
                        <div className="first">
                            <fieldset className="AProxiesGroup">
                                <legend className="title">Proxies Group</legend>
                                <select required className="SelectProxiesGroup" >
                                    <option >Select Proxies Group</option>
                                    <option value="1">Proxies Group 1</option>
                                    <option value="2">Proxies Group 2</option>
                                    <option value="3">Proxies Group 3</option>
                                    <option value="4">Proxies Group 4</option>
                                </select>
                            </fieldset>
                            <fieldset className="MonitorDelay">
                                <legend className="title">Monitor Delay</legend>
                                <input type="text" placeholder="-"  required className="inputMonitorDelay" />
                            </fieldset>
                            <fieldset className="ErrorDelay">
                                <legend className="title">Error Delay</legend>
                                <input type="text" placeholder="-" required className="inputErrorDelay" />
                            </fieldset>
                        </div>
                        <fieldset className="QuantityTask">
                            <legend className="title">Quantity Task</legend>
                            <input type="text" placeholder="0 0 0" required className="inputQuantityTask" />
                        </fieldset>
                    </div>
                    <div className="DIVsubmit">
                        <input type="submit" value="SUBMIT" className="SubmitBtn"/>
                    </div>
                </form>
            </div>
        )
    }
}
