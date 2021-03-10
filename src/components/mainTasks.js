import React, { Component } from 'react'

import "../style/MainTasks.css"

import ShareIcon from '@material-ui/icons/Share';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import TableTasks from "./tableTasks"



const data = [
    {
        no:1,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:2,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:3,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:4,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:5,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:6,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:7,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:8,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:9,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:10,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:11,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:12,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:13,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:14,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },
    {
        no:15,
        sku:"1313875-1355",
        Country:"United States",
        Size:9.0,
        PaymentMethod:"Credit Card",
        Status:"Idle",
        MonitorDelay:120,
        ErrorDelay:120
    },

]

export default class mainTasks extends Component {
    ExchageTask = (e)=>{
        if(e.target.innerHTML==="Regular"){
            this.setState({
                MODE:0,
            })
        }else{
            this.setState({
                MODE:1,
            })
        }
        document.querySelector("#IdTitleRegular").classList.toggle("Notfocused")
        document.querySelector("#IdTitleMonitor").classList.toggle("Notfocused")
        document.querySelector("#IdborderRegular").classList.toggle("visible-none")
        document.querySelector("#IdborderMonitor").classList.toggle("visible-none")

    }
    state={
        MODE:0,
    }
    render() {
        return (
            <div className="MainTasks">
                <div className="header">
                    <div className="titles">
                        <p onClick={this.ExchageTask} id="IdTitleRegular" className="first">Regular</p>
                        <p onClick={this.ExchageTask} id="IdTitleMonitor" className="second Notfocused">Monitor</p>
                    </div>
                    <div className="borders">
                        <div id="IdborderRegular" className="first"></div>
                        <div id="IdborderMonitor" className="second visible-none"></div>
                    </div>
                </div>
                <div className="sousHeader">
                    <div className="left">
                        <p className="title">Task List</p>
                        <div className="coteDeTitle">
                            <p className="title">Total : </p>
                            <p className="data">{data.length} Task</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="share">
                            <ShareIcon className="icon"/>
                            <p className="title">Share</p>
                        </div>
                        <div className="play">
                            <PlayArrowIcon className="icon"/>
                            <p className="title">Play</p>
                        </div>
                        <div className="pause">
                            <PauseIcon className="icon"/>
                            <p className="title">Pause</p>
                        </div>
                        <div className="delete">
                            <DeleteIcon className="icon"/>
                            <p className="title">Delete</p>
                        </div>
                        <AddIcon className="plusIcon"/>
                    </div>
                </div>
                <TableTasks mode={this.state.MODE} data={data} className="TableTasks"/>
            </div>
        )
    }
}