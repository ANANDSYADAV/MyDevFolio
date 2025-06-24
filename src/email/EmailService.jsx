import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function CardDefault({ msg, setShow, setMsg }) {
    return (
        <Card className="w-[70%] md:w-[50%]">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="/images/popup-img.jpg"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody className='p-4'>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {msg}
                </Typography>
            </CardBody>
            <button className="py-2 px-4 mb-5 bg-slate-500 w-[60%] rounded-lg text-white hover:bg-slate-700 hover:font-semibold self-center" onClick={() => {
                setShow(false);
                setMsg(null);
            }}> Message Again</button>
        </Card>
    );
}

const ContactForm = () => {
    const form = useRef(null);
    const [popupShow, setPopupShow] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    const [email, setEmail] = useState(null);
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(value));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('send email method called');

        if (form.current) {
            console.log('inside the if statement');
            // emailjs.sendForm('service_aukwn5h', 'template_vuw0uuq', form.current, 'Ta9GCls3teAahVsFD')
            emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
                .then(() => {
                    setPopupMessage("Your message has been received by me. I will have a look and will get back to you as soon as possible.");
                    setPopupShow(true);
                })
                .catch((error) => {
                    setPopupMessage('Failed to send message: ' + error.message);
                    setPopupShow(true);
                });
        }
        form.current?.reset();
        setEmail(null);
        setIsValid(true);
    };

    return (
        <div className='bg-slate-200 py-12 space-y-6 flex justify-center w-full'>
            {popupShow && <CardDefault msg={popupMessage} setShow={setPopupShow} setMsg={setPopupMessage} />}

            {!popupShow && <form
                id="contact"
                ref={form}
                onSubmit={sendEmail}
                className="w-full"
            >
                <section className='w-[90%] md:w-[50%] mx-auto flex flex-col gap-2'>
                    <h2 className="text-3xl font-bold font-serif text-center text-gray-800">Contact Me</h2>

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name..."
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div>
                        <input
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={handleChange}
                            placeholder="abcd@gmail.com"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {!isValid && <p style={{ color: 'red' }}>Please enter a valid email.</p>}
                    </div>

                    <textarea
                        name="message"
                        placeholder="Write your message for me"
                        required
                        className="w-full px-4 py-2 h-32 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Send
                    </button>
                </section>
            </form>}
        </div>
    );
};

export default ContactForm;
