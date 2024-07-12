import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import './Notification.css'


const Notification = ({message, onClose, color}) =>{
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`notification ${show ? 'show' : ''}`} style={{backgroundColor: color}}>
            <div className="notification-content">
                <BsCheckCircle className='notification-icon'/>
            </div>
            <p>{message}</p>
            <button className="close-button" onClick={handleClose}>X</button>
        </div>
    );
};


export default Notification