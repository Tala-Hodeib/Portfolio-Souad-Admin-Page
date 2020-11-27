import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './AddContact';
import EditContact from './EditContact';
import MainContact from './MainContact';

export default class contact extends React.Component {
    
    render() {
        return (
            <div className='contact'>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/contact" component={MainContact} />
                            <Route  path="/contact/add" component={AddContact} />
                            <Route  path="/contact/edit/:id" component={EditContact}/>
                        </Switch>
                    </Router>
                    
                </div>
            </div>
        )
    }
    }
