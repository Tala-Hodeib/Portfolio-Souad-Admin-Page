import React from 'react'
import { Link, useParams,withRouter } from 'react-router-dom';

 class Editskills  extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            skillsup: {}
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);

      }
      
    updateSkill= async (e) =>{
        e.preventDefault();
             const name=e.target.name.value;
             const label=e.target.label.value;
             const description=e.target.description.value;

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({ name:name ,label:label,description:description}),
        
        };

        
        // console.log({this.state.homeup.id})
        const url=`http://localhost:8000/skills/edit/${this.state.skillsup.id}`;
        const response= await fetch(url,requestOptions);  
        const result= await response.json();
        console.log(result);
        e.target.name.value="";
        e.target.label.value="";
        e.target.description.value="";
        
    }
    componentDidMount=(e)=>{
        const {name,label,description}=this.props.location.state.skill
            console.log(this.props.location)
            // console.log(name,label,description)
        this.setState({skillsup:this.props.location.state.skill})
        

    }
    handleInputChange(e) {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

 

    render() {
       // console.log(this.props.location)
    return (
        <div>
           <form   onSubmit={this.updateSkill}>
                
                <input type="text" onChange={this.handleInputChange} defaultValue={this.state.skillsup.name} name="name" placeholder="name"/> 
                <input type="text" onChange={this.handleInputChange}   defaultValue={this.state.skillsup.label} name="label" placeholder="label"/>
                <input type="text"  onChange={this.handleInputChange}  defaultValue={this.state.skillsup.description} name="description" placeholder="description"/>
                <input type="submit"  value="save" />
                <Link to="/skills">
                <input type="button" value="cancel" />
                </Link>
            </form>
                        
        </div>
    )
}
}

export default withRouter(Editskills)
