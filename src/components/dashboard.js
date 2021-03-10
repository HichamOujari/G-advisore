import React, { Component,Fragment } from 'react'
import SideBar from "./sideBar";
import NavBar from "./navBar";
import MainDash from "./mainDash"
import FavoriteStore from "./favoriteStore.js"

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <SideBar title={0}/>
                 <NavBar title="Dashboard"/>
                <MainDash/>
                <FavoriteStore />
            </Fragment>
        );
    }
}
