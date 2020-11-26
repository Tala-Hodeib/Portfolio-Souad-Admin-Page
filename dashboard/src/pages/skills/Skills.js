import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addskills from './Addskills';
import Editskills from './Editskills';
import Mainskills from './Mainskills';

export default class Home extends React.Component {
    
    render() {
        return (
            <div className='skills'>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/skills" component={Mainskills} />
                            <Route  path="/skills/add" component={Addskills} />
                            <Route  path="/skills/edit/:id" component={Editskills}/>
                        </Switch>
                    </Router>
                    
                </div>
            </div>
        )
    }
    }