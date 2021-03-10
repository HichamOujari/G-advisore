import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../style/SideBar.css'
import logo from "../Assets/logo.png"
import SideBarEle from "./sideBarEle"

import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined';

export default class SideBar extends Component {
    IsFocused = (N)=>{
        if(N===this.props.title){
            return 1
        }
        return 0
    }
    render() {
        return (
            <div className="SideBar">
                <div className="logoVersion">
                    <img src={logo} className="logo" alt="logo"/>
                    <p className="version">v1.0.0</p>
                </div>
                <div className="SideBarEles">
                    <Link to="/"><SideBarEle title="Dashboard" icon={0} Focus={this.IsFocused(0)}/></Link>
                    <Link to="/Tasks"><SideBarEle title="Tasks"   icon={1} Focus={this.IsFocused(1)} /></Link>
                    <Link to="/Profile"><SideBarEle title="Profile" icon={2} Focus={this.IsFocused(2)}/></Link>
                    <Link to="/Proxies"><SideBarEle title="Proxies" icon={3} Focus={this.IsFocused(3)}/></Link>
                    <Link to="/Account"><SideBarEle title="Account" icon={4} Focus={this.IsFocused(4)}/></Link>
                    <Link to="/Setting"><SideBarEle title="Setting" icon={5} Focus={this.IsFocused(5)}/></Link>
                    <Link to="/Revewal"><SideBarEle title="Revewal" icon={6} Focus={this.IsFocused(6)}/></Link>
                </div>
                <div className="LisenceKeyCard">
                    <p className="title title1">Lisence Key</p>
                    <div className="input">
                        <input type="password" placeholder="XXXX-XXXX-XXXX-XXXX" />
                        <VisibilityTwoToneIcon className="eye"/>
                    </div>
                    <p className="title title2">Expiration</p>
                    <p className="date">Oct 20,2021</p>
                    <Link to="#" className="Renewal">
                        <span className="title">Renewal</span>
                        <ArrowForwardTwoToneIcon className="arrow"/>
                    </Link>
                </div>
                <div className="Undind">
                        <CloudOffOutlinedIcon className="cloud" />
                        <p className="title">UNBIND</p>
                </div>
            </div>
        )
    }
}
