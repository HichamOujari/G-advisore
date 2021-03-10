import React, { Component,Fragment } from 'react'
import "../style/Tasks.css"
import SideBar from "./sideBar";
import NavBar from "./navBar";
import MainTasks from "./mainTasks.js"

import TasksGroupBar from "./tasksGroupBar"

export default class Tasks extends Component {
    render() {
        return (
            <Fragment>
                <SideBar title={1}/>
                <NavBar title="Tasks"/>
                <TasksGroupBar/>
                <MainTasks/>
            </Fragment>
        )
    }
}