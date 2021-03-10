import React, { Component } from 'react'
import "../style/ProxiesGroup.css"

import ProxiesGroupCard from "./proxiesGroupCard"

import AddIcon from '@material-ui/icons/Add';


export default class ProxiesGroup extends Component {
    listProxiesGroup = ()=>this.props.data.map((ele,index) =>{
        return <ProxiesGroupCard key={index} data={ele} />
    })
    render() {
        return (
            <div className="ProxiesGroup">
                <div className="header">
                    <p className="left">Proxies Group</p>
                    <div className="right">
                        <p className="title">Create Group</p>
                        <AddIcon className="icon"/>
                    </div>
                </div>
                <div className="content">
                    {this.listProxiesGroup()}
                </div>
            </div>
        )
    }
}
