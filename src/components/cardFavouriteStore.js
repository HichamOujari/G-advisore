import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../style/CardFavouriteStore.css"
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

export default class CardFavouriteStore extends Component {
    render() {
        return (
            <div className="CardFavouriteStore">
                <div className="headerCard">
                    <p className="title">{this.props.title}</p>
                    <MoreVertIcon className="doted"/>
                </div>
                <p className="link">
                    <LinkIcon className="iconLink"/>
                    <Link to="#" className="contentLink">{this.props.link}</Link>
                </p>
                <div className="bottomCard">
                    <div className="leftCard">
                        <DoneOutlinedIcon className="icon"/>
                        <div className="text">
                            <p className="title">Checkout Amount</p>
                            <p className="data">{this.props.checkout}</p>
                        </div>
                    </div>
                    <div className="rightCard">
                        <AttachMoneyOutlinedIcon className="icon"/>
                        <div className="text">
                            <p className="title">Spent Amount</p>
                            <p className="data">${this.props.spent}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}