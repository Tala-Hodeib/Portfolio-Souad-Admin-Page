import React from 'react'
//import Mainskills from './Mainskills';
import { Link } from 'react-router-dom';
import './AddContact.css';



export default class AddContact extends React.Component {
        createLink = async (e)=>{
             e.preventDefault();
             const facebook_link=e.target.facebook_link.value;
             const youtube_link=e.target.youtube_link.value;
             const twitter_link=e.target.twitter_link.value;
             const email=e.target.email.value;
             const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json','Accept':'application/json' },
                    body: JSON.stringify({ facebook_link:facebook_link ,youtube_link:youtube_link, twitter_link:twitter_link, email:email}),
                
                };
                console.log(facebook_link, youtube_link, twitter_link, email);
                const url=`http://localhost:8000/contact_links/insert`;
                const response= await fetch(url,requestOptions);  
                const result= await response.json();
                console.log(result);
                e.target.facebook_link.value="";
                e.target.youtube_link.value="";
                e.target.twitter_link.value="";
                e.target.email.value="";
    }
    render(){
    return (
        <div>
            <form onSubmit onSubmit={this.createLink}>
                
                <input type="text"  name="facebook_link" placeholder="facebook_link"/>
            
                <input type="text" name="youtube_link" placeholder="youtube_link"/>
                <input type="text"  name="twitter_link" placeholder="twitter_link"/>
                <input type="text" name="email" placeholder="email"/>
                <input type="submit" value="save"/>
                <Link to="/contact">
                <input type="button" value="cancel"/>
                </Link>
            </form>
            
        </div>
    )
    }
}