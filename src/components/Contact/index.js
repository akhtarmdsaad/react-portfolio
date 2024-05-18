import {useState,useEffect, useRef} from 'react'
import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm('service_wh78dc5', 'template_pp9jqnh', refForm.current, '9Um9V5mCejma3j4W1')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    }
    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 3000)
    }, []);
    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['L','e','t','\'','s',' ','C','o','n','n','e','c','t','!']}
                    idx={15}
                    />
                </h1>
                <p>
                I'd love to hear from you. Whether you have a project in mind, a question to ask, or just want to chat, feel free to reach out using the form below.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' value='Send Message' className='flat-button'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Md Saad Akhtar
                <br />
                Ashiyana Colony, Bisra
                <br />
                PO: Bisra, 770036 <br />
                Sundergarh, Odisha <br />
                <br />
                <span>akhtarmdsaad@gmail.com</span>
                </div>
                <div className="map-wrap">
                <MapContainer center={[22.248667, 84.987346]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[22.248667, 84.987346]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact;