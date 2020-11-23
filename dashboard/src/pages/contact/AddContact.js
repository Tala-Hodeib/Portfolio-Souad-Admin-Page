import React from 'react'
//import Mainhome from './Mainhome';
import { Link } from 'react-router-dom';



export default class AddContact extends React.Component {
        createcontact = async (e)=>{
            console.log(e);
        const title=e.target.title.value;
        const description=e.target.description.value;
        const image=e.target.image.value;
        console.log(title, description, image);
        //const url=`https://localhost:8000/home/add?title=${title}&description=${description}&image=${image}`;
        /*try {
            
        
        const response= await fetch(url);
        const result= response.json();
        console.log(result);
        } catch (error) {
           console.log(error);     
        }*/
    }
    render(){
    return (
        <div>
            <form onSubmit>
                
                <input type="text"  name="title" placeholder="title"/>
            
                <input type="text" name="description" placeholder="description"/>
                <input type="text"  name="image" placeholder="image"/>
                <input type="submit" value="save"/>
                <Link to="/contact">
                <input type="button" value="cancel"/>
                </Link>
            </form>
            
        </div>
    )
    }
}