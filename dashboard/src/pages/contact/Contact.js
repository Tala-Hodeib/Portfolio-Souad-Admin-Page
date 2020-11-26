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
                            <Route exact path="/contact_links" component={MainContact} />
                            <Route  path="/home/addcontact_links" component={AddContact} />
                            <Route  path="/home/editcontact_links/:id" component={EditContact}/>
                        </Switch>
                    </Router>
                    
                </div>
            </div>
        )
    }
    }
