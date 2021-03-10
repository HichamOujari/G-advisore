import React, { Component } from 'react'

import "../style/ProfileGroupCard.css"

import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

export default class ProfileGroupCard extends Component {
    render() {
        return (
            <div className="ProfileGroupCard">
                <div className="top">
                    <div className="left">
                        <p className="title">{this.props.data.ProfilName}</p>
                        <p className="sous">{this.props.data.StoreName}</p>
                    </div>
                    <div className="right">
                        <FileCopyIcon  className="icon"/>
                        <CreateIcon  className="icon"/>
                        <DeleteIcon  className="icon"/>
                    </div>
                </div>
                <div className="bottom">
                    <p className="title">Profile Total :</p>
                    <div className="data"> 
                        <p className="value">{this.props.data.ProfileTotal}</p>
                        Profile
                    </div>
                </div>
            </div>
        )
    }
}
