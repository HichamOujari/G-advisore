import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import "../style/TasksGroupBar.css"

import AddCircleIcon from '@material-ui/icons/AddCircle';
import TasksGroupCard from "./tasksGroupCard"

export default class TasksGroupBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="TasksGroupBar">
                    <div className="header">
                        <p className="left">Tasks Group</p>
                        <Link to="/Tasks/NewGroup" className="right">
                            <p className="title">Create Group</p>
                            <AddCircleIcon  className="icon"/>
                        </Link>
                    </div>
                    <div className="content">
                        <TasksGroupCard ID={0} NikeGroup="Nike Group" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={1} NikeGroup="Nike Group #1" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={2} NikeGroup="Nike Group #2" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={3} NikeGroup="Nike Group #3" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={4} NikeGroup="Nike Group #4" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={5} NikeGroup="Nike Group #5" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={6} NikeGroup="Nike Group #6" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={7} NikeGroup="Nike Group #7" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={8} NikeGroup="Nike Group #8" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={9} NikeGroup="Nike Group #9" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                        <TasksGroupCard ID={10} NikeGroup="Nike Group #10" Title="Nike Men's Air MAX 270" NikeStore="Nike Store" ProxiesGroup="Terminator" ProfileGroup="Profile1"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
