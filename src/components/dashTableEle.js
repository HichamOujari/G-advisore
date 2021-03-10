import React, { Component } from 'react'
import "../style/DashTableEle.css"


export default class DashTableEle extends Component {
    render() {
        return (
            <div className="DashTableEle">
                <p className="No">
                    {this.props.No}.
                </p>
                <div className="ProductName">
                    <p className="super">{this.props.ProdName}</p>
                    <p className="sous">{this.props.Store}</p>
                </div>
                <p className="ProfilName">{this.props.ProfilName}</p>
                <p className="ProxyGroup">{this.props.ProxyGroup}</p>
                <p className="DateOfCheckout">{this.props.DateOfCheckout}</p>
                <p className="Price">${this.props.Price}</p>
            </div>
        )
    }
}