import React from 'react'
import Whatwedo  from './Whatwedo'
import Videopage from './Videopage'
import Box1 from './Boxs/Box1'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Mainpage() {
    return (
        <div>
                <Router>
                <Switch>
                    <Route path="/" exact component={Whatwedo}/>
                    <Route path="/Box1" exact component={Box1}/>
                </Switch>
                </Router>    
        </div>
    )
}

export default Mainpage
