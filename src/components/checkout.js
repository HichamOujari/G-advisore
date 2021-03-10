import React, { Component } from 'react'
import "../style/Checkout.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {Doughnut} from 'react-chartjs-2';

export default class Checkout extends Component {
    render() {
        return (
            <div className="CardcheckAnalyse">
                <div className="header">
                    <p className="title">{this.props.title}</p>
                    <div onClick={()=>document.querySelector("#id"+this.props.SecondPar).classList.toggle("display-none")} className="mode">
                        <p className="title">1 Week</p>
                        <ArrowDropDownIcon className="icon"/>
                    </div>
                    <div id={"id"+this.props.SecondPar} className="listMode display-none">
                        <p className="week">1 Week</p>
                        <p className="month">1 Month</p>
                        <p className="year">1 Years</p>
                        <p className="anytime">Any Time</p>
                    </div>
                </div>
                <div className="content">
                    <div className="graph">
                        <Doughnut width={1000} legend={{display:false}} height={1000} data={this.props.data}/>
                    </div>
                    <div className="descrip">
                        <div className="first">
                            <div className="title">
                                <FiberManualRecordIcon className="icon"/>
                                <p className="soustitle">All Task</p>
                            </div>
                            <p className="value">{this.props.Tasks}</p>
                        </div>
                        <div className="second">
                            <div className="title">
                                <FiberManualRecordIcon className="icon"/>
                                <p className="soustitle">{this.props.SecondPar}</p>
                            </div>
                            <p className="value">{this.props.SecondParData}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
