import React, { Component } from 'react'
import "../style/TasksGroupCard.css"

import FileCopyIcon from '@material-ui/icons/FileCopy';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default class TasksGroupCard extends Component {
    render() {
        return (
            <div id={"idAll"+this.props.ID} className="TasksGroupCard backWithoutFocus">
                <div className="header">
                    <p className="title">{this.props.NikeGroup}</p>
                    <div className="icons">
                        <p className="icon"><FileCopyIcon className="icon1"/></p>
                        <p className="icon"><CreateIcon className="icon2"/></p>
                        <p className="icon"><DeleteIcon className="icon3"/></p>
                    </div>
                </div>
                <div className="body">
                    <div className="left">
                        <p className="title">{this.props.Title}</p>
                        <p className="data">{this.props.NikeStore}</p>
                    </div>
                    <div className="right rotate" onClick={(e)=>{
                            e.target.classList.toggle("rotate");
                            document.querySelector("#id"+this.props.ID).classList.toggle("display-none");
                            document.querySelector("#id"+this.props.ID).classList.toggle("display-flex");
                            document.querySelector("#idAll"+this.props.ID).classList.toggle("backWithoutFocus");
                            document.querySelector("#idAll"+this.props.ID).classList.toggle("backWithFocus");
                        }}>
                        <KeyboardArrowUpIcon className="icon"/>
                    </div>
                </div>
                <div id={"id"+this.props.ID} className="cached display-none">
                    <div className="ProxiesGroup">
                        <p className="title">Proxies Group</p>
                        <p className="data">{this.props.ProxiesGroup}</p>
                    </div>
                    <div className="ProfileGroup">
                        <p className="title">Profile Group</p>
                        <p className="data">{this.props.ProfileGroup}</p>
                    </div>
                </div>
            </div>
        )
    }
}
