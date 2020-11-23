import React from 'react'
import './MainContact.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Maincontact extends React.Component {
  state ={
    contact:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/contact");
    const result=await response.json();
    console.log(result.contactlist[0].title);
    this.setState({contact:result.contactlist});
    //console.log(this.state);

    
}

render() {
  
    return (
          <div class='tbl'>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>
                      <div>
                        <span> Add contact </span>
                         <Link to="/contact/add">
                         <FaIcons.FaPlus class='icon'/>
                        </Link>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {
                    this.state.contact.map((contact=>
                      <tr>
                    <td>{contact.title}</td>
                    <td>{contact.description}</td> 
                    <td>{contact.image}</td> 
                    <td>
                        <div >
                          <Link to="/contact/edicontact/:id" ><FaIcons.FaEdit /></Link>
                          <Link class='icon'><FaIcons.FaMinusCircle  /></Link>
                    </div>
                    </td>
                    </tr>

                    ))
                    }
                  
                  
                  
                  
                  
                  
                  
                </tbody>
              </table>
            </div>
         </div>
    )}
}