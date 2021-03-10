import React, { Component } from 'react'
import "../style/SideBarEle.css"

import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivityOutlined';


const Icons=[<DashboardRoundedIcon/>,<AssignmentOutlinedIcon/>,<PermIdentityOutlinedIcon/>,<VpnKeyOutlinedIcon/>,<SupervisorAccountOutlinedIcon/>,<SettingsIcon/>,<LocalActivityOutlinedIcon/>,];

export default class SideBarEle extends Component {
    render() {
        var color=""
        if(this.props.Focus===1){
            color=" color-27FFE3"
        }
        return (
            <div className="SideEle">
                <i className={"SideEleIcon"+color}>{Icons[this.props.icon]}</i>
                <p className="SideEleTitle">{this.props.title}</p>
            </div>
        )
    }
}
