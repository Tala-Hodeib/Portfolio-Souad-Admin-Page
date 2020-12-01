
import React from 'react'
import { Link, useParams,withRouter } from 'react-router-dom';

 class EditContact  extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            contactup: {}
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);

      }
      
    updateLink= async (e) =>{
        e.preventDefault();
             const facebook_link=e.target.facebook_link.value;
             const twitter_link=e.target.twitter_link.value;
             const youtube_link=e.target.youtube_link.value;
             const email=e.target.email.value;

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({ facebook_link:facebook_link ,twitter_link:twitter_link,youtube_link :youtube_link, email:email}),
        
        };

        
        // console.log({this.state.homeup.id})
        const url=`http://localhost:8000/contact/edit/${this.state.contactup.id}`;
        const response= await fetch(url,requestOptions);  
        const result= await response.json();
        console.log(result);
       e.target.facebook_link.value="";
       e.target.youtube_link.value="";
       e.target.twitter_link.value="";

        
    }
    componentDidMount=(e)=>{
        const {facebook_link,youtube_link,twitter_link,email}=this.props.location.state
            console.log(this.props.location.state)
            // console.log(facebook_link,youtube_link,twitter_link,email)
            this.setState({contactup:this.props.location.state.contact})
        

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
           <form   onSubmit={this.updateLink}>
                
                <input type="text" onChange={this.handleInputChange} defaultValue={this.state.contactup.facebook_link} name="facebook_link" placeholder="Facebook"/> 
                <input type="text" onChange={this.handleInputChange}   defaultValue={this.state.contactup.twitter_link} name="twitter_link" placeholder="Twitter"/>
                <input type="text"  onChange={this.handleInputChange}  defaultValue={this.state.contactup.youtube_link} name="youtube_link" placeholder="YouTube"/>
                <input type="text"  onChange={this.handleInputChange}  defaultValue={this.state.contactup.email} name="email" placeholder="Email"/>
                <input type="submit"  value="save" />
                <Link to="/contact">
                <input type="button" value="cancel" />
                </Link>
            </form>
                        
        </div>
    )
}
}

export default withRouter(EditContact)