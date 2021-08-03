import React from 'react'
import Whatwedo  from './Whatwedo'

import Box1 from './Boxs/Box1'
import Box2 from './Boxs/Box2'
import Box3 from './Boxs/Box3'
import Box4 from './Boxs/Box4'
import Box5 from './Boxs/Box5'
import Box6 from './Boxs/Box6'
import Box7 from './Boxs/Box7'
import Box8 from './Boxs/Box8'
import Box9 from './Boxs/Box9'
import Box10 from './Boxs/Box10'
import Box11 from './Boxs/Box11'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Mainpage() {
    return (
        <div>
                <Router>
                <Switch>
                    <Route path="/" exact component={Whatwedo}/>
                    <Route path="/Box1" exact component={Box1}/>
                    <Route path="/Box2" exact component={Box2}/>
                    <Route path="/Box3" exact component={Box3}/>
                    <Route path="/Box4" exact component={Box4}/>
                    <Route path="/Box5" exact component={Box5}/>
                    <Route path="/Box6" exact component={Box6}/>
                    <Route path="/Box7" exact component={Box7}/>
                    <Route path="/Box8" exact component={Box8}/>
                    <Route path="/Box9" exact component={Box9}/>
                    <Route path="/Box10" exact component={Box10}/>
                    <Route path="/Box11" exact component={Box11}/>
                
                </Switch>
                </Router>    
        </div>
    )
}

export default Mainpage
