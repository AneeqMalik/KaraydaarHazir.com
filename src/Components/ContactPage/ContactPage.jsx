import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import contact from './contact.svg';
import { MDBTextArea } from 'mdb-react-ui-kit';
import './ContactPage.css'


const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    floating: true,
};


function SignUp(e) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3w0ayft', 'template_1giw2t5', form.current, '3SrU5x67Ju8W97MMk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div>
            <div className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100 cont2">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</p>

                                            <form ref={form} onSubmit={sendEmail} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name='name' type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-at fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name='email' type="email" id="form3Example3c" className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-heading fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name='subject' type="text" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Subject</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <MDBTextArea name="message" label='Message' id='textAreaExample' rows={4} />
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                                    <button type="submit" style={{ backgroundColor: 'blue', width: '50%' }} className="btn btn-primary btn-lg">Submit</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={contact}
                                                className="img-fluid" alt="Sample" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <ChatBot

                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Apka Rehnuma"
                    speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={[
                        {
                            id: '1',
                            message: 'What is your name?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'Hi {previousValue}, nice to meet you!',
                            trigger: '4',

                        },
                        {
                            id: '4',
                            message: 'How may I assist you?',
                            end: true,
                        },

                    ]}
                    {...config}

                />
            </ThemeProvider>
        </div>
    )
}

export default SignUp