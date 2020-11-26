import React from 'react'
import './MainContact.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Maincontact extends React.Component {
  state ={
    contact_links:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/contact_links");
    const result=await response.json();
    console.log(result);
    this.setState({contact:result.ContactLinks});
    console.log(this.state.contact_links);

    
}
deleteContact=async(id)=>{
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json','Accept':'application/json' },


};
  const url=`http://localhost:8000/contact_links/delete/${id}`;
  try {
    const response = await fetch(url,requestOptions);
    const result=await response.json();
    const refreshContact=this.state.contact_links.filter(
      contact => contact.id!==id
    );
    this.setState({contact:refreshContact});
    console.log(this.state.contact_links);

  } catch (error) {
    console.log(error);

  }

}
render() {
  
    return (
          <div class='tbl'>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Facebook Link</th>
                    <th>Youtube Link</th>
                    <th>Twitter Link</th>
                    <th>Email</th>
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
                    <td>{contact.facebook_link}</td>
                    <td>{contact.youtube_link}</td> 
                    <td>{contact.twitter_link}</td> 
                    <td>{contact.email}</td>
                    <td>
                        <div >
                          <Link to="/contact/edicontact/:id" ><FaIcons.FaEdit /></Link>
                          <Link class='icon'><FaIcons.FaMinusCircle onClick={()=>{this.deleteLink(contact.id)}}  /></Link>
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