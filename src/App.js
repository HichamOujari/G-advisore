import React from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Dashboard from "./components/dashboard"
import Tasks from "./components/tasks"
import FormNewGroup from "./components/formNewGroup"
import Proxies from "./components/proxies"
import Profile from "./components/profile"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Tasks" component={Tasks}/>
          <Route exact path="/Tasks/NewGroup" component={FormNewGroup}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Proxies" component={Proxies}/>
        </Switch>
    </Router>
  );
}

export default App;
