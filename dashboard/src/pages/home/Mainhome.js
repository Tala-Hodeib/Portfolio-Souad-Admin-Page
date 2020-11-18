import React from 'react'
import './Mainhome.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export default class Mainhome extends React.Component {
  state ={
    home:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/home");
    const result=await response.json();
    console.log(result.homelist[0].title);
    this.setState({home:result.homelist});
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
                        <span> Add Home </span> 
                        <FaIcons.FaPlus class='icon'/>
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
                    this.state.home.map((home=>
                      <tr>
                    <td>{home.title}</td>
                    <td>{home.description}</td> 
                    <td>{home.image}</td> 
                    <td>
                        <div >
                          <Link to="/home/edithome/:id" ><FaIcons.FaEdit /></Link>
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


