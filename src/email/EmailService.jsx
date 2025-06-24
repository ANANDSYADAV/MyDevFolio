import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
    const form = useRef(null);
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

        if (form.current) {
            emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
                .then(() => {
                    toast("Your message has been received!");
                })
                .catch((error) => {
                    toast('Failed to send message');
                });
        }
        form.current?.reset();
        setEmail(null);
        setIsValid(true);
    };

    return (
        <form
            id="contact"
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-200 py-12 space-y-6 flex justify-center w-full"
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
            <ToastContainer />
        </form>
    );
};

export default ContactForm;
