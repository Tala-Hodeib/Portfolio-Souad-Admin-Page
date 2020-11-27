import React from 'react'
//import Mainskills from './Mainskills';
import { Link } from 'react-router-dom';
import './Addskills.css';



export default class Addskills extends React.Component {
        createskills = async (e)=>{
             e.preventDefault();
             const name=e.target.name.value;
             const label=e.target.label.value;
             const description=e.target.description.value;
             const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json','Accept':'application/json' },
                    body: JSON.stringify({ name:name ,label:label, description:description}),
                
                };
                console.log(name, label, description);
                const url=`http://localhost:8000/skills/insert`;
                const response= await fetch(url,requestOptions);  
                const result= await response.json();
                console.log(result);
                e.target.name.value="";
                e.target.label.value="";
                e.target.description.value="";

           
       
       
    }
    render(){
    return (
        <div>
            <form   onSubmit={this.createskills}>
                
                <input type="text"  name="name" className="name" placeholder="name"/>

                <input type="text" name="label" className="label" placeholder="label"/>
                <textarea name="description" className="description" placeholder="description"/>
                <input type="submit" value="save" />
                <Link to="/skills">
                <input type="button" value="cancel" />
                </Link>
            </form>
            
        </div>
    )
    }
}  