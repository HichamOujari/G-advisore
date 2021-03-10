import React, { Component, Fragment } from 'react'
import "../style/TableTasks.css"

import TableTasksEle from "./tableTasksEle"



export default class TableTasks extends Component {
    ListTasks = ()=>this.props.data.map(ele =>{
        return <TableTasksEle mode={this.props.mode} key={ele.no} data={ele}/>
    })
    AjusteMode=()=>{
        if(this.props.mode===0){
            return <Fragment>
                <p className="PaymentMethod">Payment Method</p>
            </Fragment>
        }
        else{
            return <Fragment>
                <p className="MonitorDelay">Monitor Delay</p>
                <p className="ErrorDelay">Error Delay</p>
            </Fragment>
        }
    }
    render() {
        return (
            <div className="MainTableTasks">
                <div className="header">
                    <p className="no">No.</p>
                    <p className="SKU">SKU</p>
                    <p className="Country">Country</p>
                    <p className="Size">Size</p>
                    {this.AjusteMode()}
                    <p className="Status">Status</p>
                    <p className="Actions">Actions</p>
                </div>
                <div className="body">
                    {this.ListTasks()}
                </div>
            </div>
        )
    }
}
