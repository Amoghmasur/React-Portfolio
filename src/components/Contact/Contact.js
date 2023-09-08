import React from 'react'
import "./Contact.css"
import Particle from "../Particle";

function Contact() {
    return (
        <div className='bgg'>
            <Particle/>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="content">
                        <div className="image-box">
                            <p style={{color:"whitesmoke"}}>Let's connect and discuss how I can bring your next project to life.
                            Feel free to reach out; I'm always open to new opportunities and collaborations.</p>
                        </div>
                        <form id="contact-form">

                            <div className="form-group">
                                <div className="field">
                                    <input type="text" name="name" placeholder="Name" required/>
                                        <i className='fas fa-user'></i>
                                </div>
                                <div className="field">
                                    <input type="text" name="email" placeholder="Email" required/>
                                        <i className='fas fa-envelope'></i>
                                </div>
                                <div className="field">
                                    <input type="text" name="phone" placeholder="Phone"/>
                                        <i className='fas fa-phone-alt'></i>
                                </div>
                                <div className="message">
                                    <textarea placeholder="Message" name="message" required></textarea>
                                    <i className="fas fa-comment-dots"></i>
                                </div>
                            </div>
                            <div className="button-area">
                                <button type="submit">
                                    Submit <i className="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact