import React from 'react'
import './Mainskills.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export default class Mainskills extends React.Component {
  state ={
    skills:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/skills");
    const result=await response.json();
    console.log(result.skillslist[0].title);
    this.setState({skills:result.skillslist});
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
                        <span> Add skills </span> 
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
                    this.state.skills.map((skills=>
                      <tr>
                    <td>{skills.title}</td>
                    <td>{skills.description}</td> 
                    <td>{skills.image}</td> 
                    <td>
                        <div >
                          <Link to="/skills/ediskills/:id" ><FaIcons.FaEdit /></Link>
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