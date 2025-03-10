import React from 'react';
import QRCodeImage from '../assets/qrcode.png';
import './qrcode.css'

const QRCode = () => {
    return (
    <section className="container">
    <img src={QRCodeImage} alt="QRCOde" className="image"/>
       <div className="content">
       <span className="intro">Improve your front-end skills by building projects</span>
       <span className="intro1">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</span>
    </div>
    </section>

    )
}

export default QRCode;


