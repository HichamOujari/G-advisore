import React, { Component } from 'react'
import "../style/NavBar.css"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import NotifyEle from "./notifyEle";

import ErrorIcon from '@material-ui/icons/Error';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class NavBar extends Component {
    componentDidMount(){
        document.querySelector("#NotifyIconNav").addEventListener("click",()=>{
            document.querySelector("#NotifyContent").classList.toggle("display-none");
        })
    }
    render() {
        return (
            <div className="navBar">
                <p className="title">{this.props.title}</p>
                <div className="icons">
                        <ErrorIcon className="error"/>
                        <NotificationsIcon id="NotifyIconNav" className="notification"/>
                        <AccountCircleIcon className="avatar" />
                </div>
                <div className="notify display-none" id="NotifyContent">
                    <ArrowDropDownIcon className="icon" />
                    <div className="content">
                        <NotifyEle title="Changelog" date="Dec 14,2020" color="Color-FF3D96" content="A feature has been added that allows the user to call a person who is saved as a pre-configured SOS message contact."/>
                        <NotifyEle title="Announcement" date="Dec 13,2020" color="Color-27DAE1" content="Lorem Ipsum is simply dummy text of the printing and typesetting."/>
                        <NotifyEle title="Changelog" date="Dec 12,2020" color="Color-FF3D96" content="A feature has been added that allows the user to call a person who is saved as a pre-configured SOS message contact."/>
                        <NotifyEle title="Announcement" date="Dec 11,2020" color="Color-27DAE1" content="Lorem Ipsum is simply dummy text of the printing and typesetting."/>
                    </div>
                </div>
            </div>
        )
    }
}
