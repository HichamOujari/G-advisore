import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../style/MainDash.css"

import Checkout from "./checkout"
import Analytic from "./analytic"
import TableCheckoutDeclines from "./tableCheckoutDeclines"

import ShareIcon from '@material-ui/icons/Share';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const data1 = {
	datasets: [{
		data: [77, 23],
		backgroundColor: [
            '#27DAE1',
            '#322D50'
        ],
        borderWidth:0,
    }],
    labels:[
        'User',
        'other'
    ],
};

const data2 = {
	datasets: [{
		data: [77, 23],
		backgroundColor: [
            '#FF3D96',
            '#322D50'
        ],
        borderWidth:0,
    }],
    weight:1,
    labels:[
        'User',
        'other'
    ],
};

export default class MainDash extends Component {

    Setfocused =()=>{
        document.querySelector("#Checkout_declines1").classList.toggle("notfocused");
        document.querySelector("#borderDeclines").classList.toggle("display");
        document.querySelector("#borderCheckout").classList.toggle("display");
        document.querySelector("#Checkout_declines2").classList.toggle("notfocused");
    }

    render() {
        return (
            <div className="DashContent">
                <div className="DashContentHeader">
                    <p className="title">Analytic Checkout</p>
                    <Link to="#"  className="shareBtn">
                        <p className="title">Share</p>
                        <ShareIcon className="icon" />
                    </Link>
                </div>
                <div className="Graphs">
                    <div className="leftGraphs">
                        <div className="checkout">
                            <Checkout data={data1} title="Success Checkout" percente={70} Tasks="12.780" SecondPar="Checkout" color="#27DAE1" SecondParData="2.700"/>
                        </div>
                        <div className="declines">
                            <Checkout data={data2} title="Declines Checkout" percente={30} Tasks="12.780" SecondPar="Declines" color="#FF3D96" SecondParData="2.700"/>
                        </div>
                    </div>
                    <div className="rightGraph">
                        <Analytic />
                    </div>
                </div>
                <div className="RecentCheckout">
                    <p className="title">Recent Checkout</p>
                    <div className="Checkout_declines">
                        <div id="Checkout_declines1" onClick={this.Setfocused} className="Checkout">
                            Checkout
                            <p id="borderCheckout" className="border"></p>
                        </div>
                        <div id="Checkout_declines2"  onClick={this.Setfocused} className="Declines notfocused">
                            Declines
                            <p id="borderDeclines" className="border display"></p>
                        </div>
                    </div>
                    <div className="other">
                        <div className="calendar">
                            <p className="date">August 2020</p>
                            <DateRangeIcon className="icon" />
                        </div>
                        <div className="Method">
                            <p className="type">Daily</p>
                            <ArrowDropDownIcon className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <TableCheckoutDeclines type="Checkouts" from="12/12/2020" to="12/12/2021"/>
                </div>
            </div>
        )
    }
}