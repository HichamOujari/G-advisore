import React, { Component } from 'react'
import "../style/MainProxies.css"
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import boost from "../Assets/boost.svg"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import TableProxies from "./tableProxies"

export default class MainProxies extends Component {
    render() {
        return (
            <div className="MainProxies">
               <div className="header">
                   <p className="title">Proxy List</p>
                   <div className="then">
                       <p className="title">Total :</p>
                       <p className="data">{this.props.data.length} Proxy</p>
                   </div>
               </div>
               <div className="underHeader">
                   <div className="left">
                       <NoteAddIcon className="icon"/>
                       <p className="title">Import Proxies</p>
                   </div>
                   <div className="right">
                       <div className="TestALL">
                           <img className="icon" src={boost} alt="..."/>
                           <p onClick={()=>{
                               this.props.data.map((ele)=>{
                                    document.querySelector("#idA"+ele.No).classList.toggle("display-none")
                                    document.querySelector("#idT"+ele.No).classList.toggle("display-none")
                                    document.querySelector("#idT"+ele.No).classList.toggle("display-flex")
                                    //after operation
                                    setTimeout(()=>{
                                        document.querySelector("#idA"+ele.No).classList.toggle("display-none")
                                        document.querySelector("#idT"+ele.No).classList.toggle("display-none")
                                        document.querySelector("#idT"+ele.No).classList.toggle("display-flex")
                                    },3000)
                                    return null
                               })
                           }} className="title">Test All</p>
                       </div>
                       <div className="DeleteAll">
                           <DeleteIcon className="icon"/>
                           <p className="title">Delete All</p>
                       </div>
                       <AddIcon className="plus"/>
                   </div>
               </div>
               <TableProxies data={this.props.data} />
            </div>
        )
    }
}
