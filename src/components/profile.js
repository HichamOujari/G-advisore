import React, { Component,Fragment } from 'react'
import  "../style/Profile.css"

import SideBar from "./sideBar";
import NavBar from "./navBar";
import ProfileGroup from "./profileGroup"
import MainProfile from "./mainProfile"
import NewProfile from "./newProfile"

const ProfileGroups = [
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
    {
        ProfilName : "Terminator Profile",
        StoreName : "Nike Store",
        ProfileTotal : 36
    },
] 

const DataTable =[
    {
        no:1,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:2,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:3,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:4,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:5,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:6,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:7,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:8,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:9,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:10,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:11,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:12,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:13,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:14,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:15,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },{
        no:16,
        Name:"Ralph Edwards",
        Email:"ronald.richards@gmail.com",
        NumCard:"1248",
    },
]
export default class Profile extends Component {
    render() {
        return (
            <Fragment>
                <SideBar title={2}/>
                 <NavBar title="Profile"/>
                 <ProfileGroup data={ProfileGroups}/>
                 <MainProfile data={DataTable} />
                 <NewProfile />
            </Fragment>
        )
    }
}
