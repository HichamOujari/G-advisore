import React, { Component } from 'react'
import "../style/Analytic.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DateRangeIcon from '@material-ui/icons/DateRange';  

export default class Analytic extends Component {
    render() {
        return (
            <div className="analysics">
                <div className="header">
                    <p className="title">Analytic</p>
                    <div className="rightContent">
                        <div onClick={()=>document.querySelector("#IdlistModeAnalytic").classList.toggle("display-none")} className="frequence">
                            <p className="title">Weekly</p>
                            <ArrowDropDownIcon className="icon"/>
                        </div>
                        <div id="IdlistModeAnalytic" className="listMode display-none">
                            <p className="week">Weekly</p>
                            <p className="month">Monthly</p>
                            <p className="year">Yearly</p>
                        </div>
                        <div className="Store">
                            <p className="title">Store</p>
                            <ArrowDropDownIcon className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="graph">
                    <div className="header">
                        <div className="left">
                            <p className="title">Showing Data:</p>
                            <p className="date">12 August - 25 August</p>
                            <ArrowDropDownIcon className="icon" />
                        </div>
                        <div className="right">
                            <p className="Month">August 2020</p>
                            <DateRangeIcon className="icon"/>
                        </div>
                    </div>
                    <div className="ContentGraph">
                        
                    </div>
                </div>
            </div>
        )
    }
}
