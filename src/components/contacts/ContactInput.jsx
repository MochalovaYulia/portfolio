import React, { useState } from 'react'

export const ContactInput = () => {

    const [state, setState] = useState('');
    const [state1, setState1] = useState('');
    const [state2, setState2] = useState('');

    const handleInputChange = (event) => {
        setState(event.target.value)
    }
    const handleInputChange1 = (event) => {
        setState1(event.target.value)
    }
    const handleTextareaChange = (event) => {
        setState2(event.target.value)
    }

    return (
        <>
            <input
                type='text'
                name='name'
                placeholder='Your Full Name'
                required
                value={state}
                onChange={handleInputChange}
            />
            <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
                value={state1}
                onChange={handleInputChange1}
            />
            <textarea
                name='message'
                rows='7'
                placeholder='Your Message'
                required
                value={state2}
                onChange={handleTextareaChange}
            />
        </>
    )
}
