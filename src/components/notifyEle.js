import React, { Component } from 'react'
import "../style/NotifyEle.css"
export default class NotifyEle extends Component {
    render() {
        return (
            <div className="notifyEle">
                <div className="head">
                    <p className={"title "+this.props.color} >{this.props.title}</p>
                    <p className="date">{this.props.date}</p>
                </div>
                <p className="content">{this.props.content}</p>
            </div>
        )
    }
}
