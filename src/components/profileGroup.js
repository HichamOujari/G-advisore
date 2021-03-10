import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../style/ProfileGroup.css"

import AddIcon from '@material-ui/icons/Add';
import ProfileGroupCard from "./profileGroupCard"

export default class ProfileGroup extends Component {
    listProfileGroup = ()=>this.props.data.map((ele,index) =>{
        return <ProfileGroupCard key={index} data={ele} />
    })
    render() {
        return (
            <div className="ProfileGroup">
                <div className="header">
                    <p className="left">Profile Group</p>
                    <Link to="/Tasks/NewGroup" className="right">
                        <p className="title">Create Group</p>
                        <AddIcon className="icon"/>
                    </Link>
                </div>
                <div className="content">
                    {this.listProfileGroup()}
                </div>
            </div>
        )
    }
}
