import React, { useContext, useState } from 'react';
import { Button, Form, NavItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactProvider';

const AddContact = () => {
    const [name, setName] = useState('')    
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const {addContact} = useContext(ContactContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        if(!name.trim() || !phone.trim() || !email.trim()){
            alert('Fill all fields')
            return
        }
        let newContact ={
            name,
            phone,
            email,
        }
        addContact(newContact)
        setName('')
        setPhone('')
        setEmail('')
        navigate('/')
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Floating className='mb-3'>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        value={name}
                        id='inpCustom'
                    />
                        <label htmlFor='inpCustom'>Enter name:</label>                    
                </Form.Floating>
                <Form.Floating className='mb-3'>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)}
                        type='text'
                        value={phone}
                        id='inpCustom'
                    />
                        <label htmlFor='inpCustom'>Enter phone number:</label>                    
                </Form.Floating>
                <Form.Floating className='mb-3'>
                <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        value={email}
                        id='inpCustom'
                    />
                        <label htmlFor='inpCustom'>Enter email address:</label>                    
                </Form.Floating>
               
                <Button type='submit' variant='outline-secondary'>
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddContact;

