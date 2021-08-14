import React, { useState } from 'react';
import './form.css'

const Form = () => {

    const [name, setName] = useState('');
    const [contacts, setContacts] = useState('');
    const [contactType, setContactType] = useState('Whatsapp');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Contacts submitted successfully! An email containing the details will be sent to you shortly.`)
    }


    return (
        <form onSubmit={handleSubmit} className='form'>

            <div className='header'>Contact Form</div>

            <div className='fullName'>
                <label>Full Name* </label>
                <input
                    type='text'
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>


            <div className='contactInfo'>
                <label>Mobile No/Telegram ID*</label>
                <input
                    type='text'
                    onChange={(event) => {
                        setContacts(event.target.value);
                    }}
                    pattern="[a-zA-Z][a-zA-Z0-9]{4,31}|[8-9]{1}[0-9]{7}"
                />
            </div>

            <div className='contactType'>
                <label>Preferred Contact Type</label>
                <select
                    onChange={(event) => {
                        setContactType(event.target.value);
                    }}>
                    <option value='Whatsapp'>Whatsapp</option>
                    <option value='telegram'>Telegram</option>
                </select>
            </div>

            <div>
                <label className='email'>Email*</label>
                <input
                    type='email'
                    placeholder='(Meetup details will be sent to this email)'
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>


            <div className='sliderContainer'>
                <label>Rate our website!</label>
                <select
                    onChange={(event) => {
                        setRating(event.target.value);
                    }}>
                    <option value='0' selected>--</option>
                    <option value='1'>1/5</option>
                    <option value='2'>2/5</option>
                    <option value='3'>3/5</option>
                    <option value='4'>4/5</option>
                    <option value='5'>5/5</option>
                </select>
            </div>

            <div className='feedback'>
                <label>Feedback</label>
                <textarea
                    onChange={(event) => {
                        setFeedback(event.target.value);
                    }}
                    placeholder='(Optional)'
                />
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
};


export default Form;
