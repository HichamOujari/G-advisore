import React, { Component } from 'react'
import "../style/MainProfile.css"

import EleTableProfile from "./eleTableProfile"

import Import from "../Assets/import.svg"
import Export from "../Assets/export.svg"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default class MainProfile extends Component {
    listProfile = () => this.props.data.map((ele,indix)=>{
        return <EleTableProfile key={indix} data={ele} />
    })
    render() {
        return (
            <div className="MainProfile">
                <div className="header">
                    <p className="left">Profile List</p>
                    <div className="sous">
                         <p className="title">Total : </p>
                         <p className="value">{this.props.data.length} Profile</p>
                    </div>
                </div>
                <div className="sousHeader">
                    <div className="left">
                        <div className="first">
                            <img src={Import} alt="..." className="icon"/>
                            <p className="title">Import</p>
                        </div>
                        <div className="second">
                            <img src={Export} alt="..." className="icon"/>
                            <p className="title">Export</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="first">
                            <DeleteIcon  className="icon"/>
                            <p className="title">Delete</p>
                        </div>
                        <AddIcon onClick={()=>{
                            document.querySelector("#NewProfileId").classList.toggle("display-none")
                        }} className="second"/>
                    </div>
                </div>
                <div className="Table">
                    <div className="header">
                        <p className="No">No.</p>
                        <div className="Name">
                            <p className="title">Name</p>
                            <ArrowDropDownIcon className="icon" />
                        </div>
                        <div className="Email">
                            <p className="title">Email Address</p>
                            <ArrowDropDownIcon className="icon" />
                        </div>
                        <p className="NumCard">Card Number</p>
                        <p className="Actions">Actions</p>
                    </div>
                    <div className="body">
                        {this.listProfile()}
                    </div>
                </div>
            </div>
        )
    }
}
