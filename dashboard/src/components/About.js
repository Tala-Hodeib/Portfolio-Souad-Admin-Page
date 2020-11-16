import React from 'react';
import './About.css';





const AboutAdminPage = () => (
    <div className='container'>
        <div>
          <p className="text">Edit about me text:</p>
             <textarea className="AboutMeText"></textarea>
        </div>
        <div>
            <p className="photo">Edit photo:</p>
            <input type="file" className="chooseFile"/> 
            <button className="confirmation">Confirm</button>
        </div>
    </div>
)








export default AboutAdminPage;
