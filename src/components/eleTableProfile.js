import React, { Component } from 'react'

import "../style/EleTableProfile.css"

import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class EleTableProfile extends Component {
    render() {
        return (
            <div className="EleTableProfile">
                <p className="No">{this.props.data.no}.</p>
                <p className="Name">{this.props.data.Name}</p>
                <p className="Email">{this.props.data.Email}</p>
                <p className="NumCard">{this.props.data.NumCard}</p>
                <div className="Actions">
                    <EditIcon  className="icon1 icon" />
                    <FileCopyIcon  className="icon2 icon" />
                    <DeleteIcon  className="icon3 icon" />
                </div>
            </div>
        )
    }
}
