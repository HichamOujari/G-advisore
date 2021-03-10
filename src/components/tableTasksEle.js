import React, { Component, Fragment } from 'react'

import "../style/TableTasksEle.css"

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export default class TableTasksEle extends Component {
    ShowMOde = ()=>{
        if(this.props.mode===0){
            return <p className="PaymentMethod">{this.props.data.PaymentMethod}</p>
        }else{
            return <Fragment>
                <p className="MonitorDelay">{this.props.data.MonitorDelay}ms</p>
                <p className="ErrorDelay">{this.props.data.ErrorDelay}ms</p>
            </Fragment>
        }
    }
    play = (e) =>{
        document.querySelector("#BtnPaly"+this.props.data.no).style.display="none"
        document.querySelector("#BtnPause"+this.props.data.no).style.display="block"
    }
    pause = (e) =>{
        document.querySelector("#BtnPaly"+this.props.data.no).style.display="block"
        document.querySelector("#BtnPause"+this.props.data.no).style.display="none"
    }
    render() {
        return (
            <div className="OneTaskEle">
                <p className="no">{this.props.data.no}.</p>
                <p className="sku">{this.props.data.sku}</p>
                <p className="Country">{this.props.data.Country}</p>
                <p className="Size">{this.props.data.Size}</p>
                {this.ShowMOde()}
                <div className="Status">
                    <FiberManualRecordIcon className="DotIcon"/>
                    <p className="title">{this.props.data.Status}</p>
                </div>
                <div className="Actions">
                    <PlayArrowIcon id={"BtnPaly"+this.props.data.no} onClick={this.play} className="PLAY"/>
                    <PauseIcon id={"BtnPause"+this.props.data.no} onClick={this.pause} className="PAUSE"/>
                    <CreateIcon className="EDITE"/>
                    <FileCopyIcon className="COPY"/>
                    <DeleteIcon className="DELETE"/>
                </div>
            </div>
        )
    }
}
