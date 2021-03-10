import React, { Component } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "../style/TableCheckoutDeclines.css";

import DashTableEle from "./dashTableEle"

const data = [
    {
        No:1,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
    {
        No:2,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
    {
        No:3,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
    {
        No:4,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
    {
        No:5,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
    {
        No:6,
        ProductName:"Adidas NMD V1 Triple Black",
        Store:"Adidas Store",
        ProfilName:"Herdric Liaw",
        ProxyGroup:"Terminator",
        DateOfCheckout:"30 Minutes Ago",
        Price:"264",
    },
]

export default class TableCheckoutDeclines extends Component {
    ListCheckout = () => data.map(Ele=>{
        return <DashTableEle key={Ele.No} No={Ele.No} ProdName={Ele.ProductName} Store={Ele.Store} ProfilName={Ele.ProfilName} ProxyGroup={Ele.ProxyGroup} DateOfCheckout={Ele.DateOfCheckout} Price={Ele.Price} />
    })
    render() {
        return (
            <div className="TableCheckoutDeclines">
                <div className="header">
                    <p className="no">No.</p>
                    <p className="NamePro">Product Name</p>
                    <div className="ProfilName">
                        <p className="title">Profile Name</p>
                        <ArrowDropDownIcon className="icon" />
                    </div>
                    <div className="ProxyGroup">
                        <p className="title">Proxy Group</p>
                        <ArrowDropDownIcon className="icon" />
                    </div>
                    <div className="DateCHeckOut">
                        <p className="title">Date of Checkout</p>
                        <ArrowDropDownIcon className="icon" />
                    </div>
                    <div className="Price">
                        <p className="title">Price</p>
                        <ArrowDropDownIcon className="icon" />
                    </div>
                </div>
                <div className="Content">
                    {this.ListCheckout()}
                </div>
            </div>
        )
    }
}
