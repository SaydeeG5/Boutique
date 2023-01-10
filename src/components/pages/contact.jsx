
import { useState } from 'react';

function Contact() {

    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function getEmailSection () {
        if (isEmailVisible) {
            return <h3>saydeeguevarra@gmail.com</h3>;
        }
        else {
            return <label> Click the button to see the email </label>;
        }
    }
    function showEmail (){
        setIsEmailVisible (true);
    
        }

    function hideEmail (){
        setIsEmailVisible (false);
        
        }
    

    return (
        <div className="contact">
            <h1>Saydee Guevarra</h1>

            {getEmailSection()} 
            <br />
            <button onClick={showEmail} type="button" className="btn btn-info">Show Email</button>
            <button onClick={hideEmail} type="button" className="btn btn-info">Hide Email</button>
        </div>
    );
}

export default Contact;