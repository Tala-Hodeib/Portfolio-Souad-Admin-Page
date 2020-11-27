import React from 'react'
import './Mainskills.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export default class Mainskills extends React.Component {
  state ={
    skills:[]
}
async componentDidMount(){
    const response = await fetch("http://localhost:8000/skills");
    const result=await response.json();
    console.log(result);
    this.setState({skills:result.skillList});
    console.log(this.state.skills);

    
}
deleteSkills=async(id)=>{
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json','Accept':'application/json' },


};
  const url=`http://localhost:8000/skills/delete/${id}`;
  try {
    const response = await fetch(url,requestOptions);
    const result=await response.json();
    const refreshSkills=this.state.skills.filter(
      skills => skills.id!==id
    );
    this.setState({skills:refreshSkills});
    console.log(this.state.skills);

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
                    <th>name</th>
                    <th>label</th>
                    <th>description</th>
                    <th>
                      <div>
                        <span> Add new </span>
                        <Link to="/skills/add">
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
                    
                     this.state.skills.map((skill=>
                       <tr>
                     <td>{skill.name}</td>
                     <td>{skill.label}</td> 
                     <td>{skill.description}</td> 
                     <td>
                        <div >
                          <Link to="/skills/editskills/:id" ><FaIcons.FaEdit /></Link>
                          <Link class='icon'><FaIcons.FaMinusCircle onClick={()=>{this.deleteSkills(skill.id)}}  /></Link>
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
