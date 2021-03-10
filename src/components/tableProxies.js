import React, { Component } from 'react'

import "../style/TableProxies.css"
import EleTableProxies from "./eleTableProxies"


export default class TableProxies extends Component {
    ListProxies = () => this.props.data.map((Ele,indix)=>{
        return <EleTableProxies key={indix} data={Ele} />
    })
    render() {
        return (
            <div className="TableProxies">
                <div className="header">
                    <p className="No">No.</p>
                    <p className="IP">IP</p>
                    <p className="Port">Port</p>
                    <p className="Username">Username</p>
                    <p className="Password">Password</p>
                    <div className="Status">
                        Status
                        <p className="sous">(Speed)</p>
                    </div>
                    <p className="Actions">Actions</p>
                </div>
                <div className="body">
                    {this.ListProxies()}
                </div>
            </div>
        )
    }
}
