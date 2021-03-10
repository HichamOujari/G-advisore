import React, { Component } from 'react'

import "../style/EleTableProxies.css"
import boost from "../Assets/boost.svg"
import loading from "../Assets/loading.svg"
import DeleteIcon from '@material-ui/icons/Delete';

export default class EleTableProxies extends Component {
    Test = (e)=>{
        if(e!==null){
            e.target.style.backgroundColor ="#27DAE1";
        }
        document.querySelector("#idA"+this.props.data.No).classList.toggle("display-none")
        document.querySelector("#idT"+this.props.data.No).classList.toggle("display-none")
        document.querySelector("#idT"+this.props.data.No).classList.toggle("display-flex")
        //after operation
        setTimeout(()=>{
            if(e!==null){
                e.target.style.backgroundColor ="#312C4E";
            }
            document.querySelector("#idA"+this.props.data.No).classList.toggle("display-none")
            document.querySelector("#idT"+this.props.data.No).classList.toggle("display-none")
            document.querySelector("#idT"+this.props.data.No).classList.toggle("display-flex")
        },3000)
    }
    render() {
        return (
            <div className="EleTableProxies">
                <p className="no">{this.props.data.No}.</p>
                <p className="IP">{this.props.data.ip}</p>
                <p className="port">{this.props.data.port}</p>
                <p className="username">{this.props.data.username}</p>
                <p className="password">{this.props.data.password}</p>
                <div className="status">
                    <p id={"idA"+this.props.data.No} className="Affiche">{this.props.data.status}ms</p>
                    <div id={"idT"+this.props.data.No} className="test display-none">
                        <img src={loading} alt='...' className="icon" />
                        <p className="title">Test</p>
                    </div>
                </div>
                <div className="Actions">
                    <img onClick={this.Test} src={boost} alt="..." className="icon1" />
                    <DeleteIcon className="icon2" />
                </div>
                
                
            </div>
        )
    }
}
