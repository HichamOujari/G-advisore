import React, { Component,Fragment } from 'react'
import "../style/Proxies.css"

import SideBar from "./sideBar";
import NavBar from "./navBar";
import ProxiesGroup from "./proxiesGroup"
import MainProxies from "./mainProxies"

const ProxiesGroups = [
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
    {
        ProxyName : "Terminator Proxies",
        StoreName : "Nike Store",
        ProxiesTotal : 36
    },
] 

const TableData = [
    {
        No:1,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:2,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:3,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:4,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:5,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:6,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:7,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:8,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:9,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:10,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:11,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:12,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:13,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:14,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:15,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },{
        No:16,
        ip:"192.168.100.255",
        port:"225",
        username:"herdicliaw",
        password:"12345",
        status:120
    },
] 

export default class Proxies extends Component {
    render() {
        return (
            <Fragment>
                <SideBar title={3}/>
                 <NavBar title="Proxies"/>
                 <ProxiesGroup data={ProxiesGroups}/>
                 <MainProxies data={TableData} />
            </Fragment>
        )
    }
}