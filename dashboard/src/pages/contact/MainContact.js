import React from 'react'
import './MainContact.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class MainContact extends React.Component {
  state ={
    contact_links:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/contact");
    const result=await response.json();
    console.log(result);
    this.setState({contact_links:result.links});
    console.log(this.state.contact_links);

    
}
deleteLink=async(id)=>{
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
    this.setState({contact_links:refreshContact});
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
                    <th>Facebook </th>
                    <th>Youtube </th>
                    <th>Twitter </th>
                    <th>Email</th>
                    <th>
                      <div>
                        <span> Add new </span>
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
                    
                    this.state.contact_links.map(((contact, index)=>
                      <tr key={index}>
                    <td>{contact.facebook_link}</td>
                    <td>{contact.youtube_link}</td> 
                    <td>{contact.twitter_link}</td> 
                    <td>{contact.email}</td>
                    <td>
                        <div >
                          <Link to={{pathname:`/contact/edit/${contact.id}`,state:{contact}}} ><FaIcons.FaEdit /></Link>
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