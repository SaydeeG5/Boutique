
import { useState } from 'react';
import "./contact.css";

function Contact() {

    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function getEmailSection () {
        if (isEmailVisible) {
            return <h2 className="contactEmail">saydeeguevarra@gmail.com</h2>;
        }
        else {
            return <label className="contactLabel"> Click for email </label>;
        }
    }

    function Email (){
        setIsEmailVisible (!isEmailVisible);
        }

    // function hideEmail (){
    //     setIsEmailVisible (false);
        
    //     }
    

    return (
        <div className="contact">
            <h1>Boutique</h1>
            <h3>by: Saydee Guevarra</h3>

            <button onClick={Email} type="button" className="btn btn-info">Email</button>
            <br />
            {getEmailSection()} 
            {/* <button onClick={hideEmail} type="button" className="btn btn-info">Hide Email</button> */}
        </div>
    );
}

export default Contact;