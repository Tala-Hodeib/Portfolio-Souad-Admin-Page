import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './AddContact';
import EditContact from './EditContact';
import MainContact from './MainContact';

export default class Home extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/contact" component={MainContact} />
                            <Route  path="/home/addcontact" component={AddContact} />
                            <Route  path="/home/editcontact/:id" component={EditContact}/>
                        </Switch>
                    </Router>
                    
                </div>
            </div>
        )
    }
    }
