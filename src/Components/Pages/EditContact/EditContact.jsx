import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactProvider';

const EditContact = () => {
    const params = useParams()
    const {getContactToEdit, contactToEdit, saveEditedContact} = useContext(ContactContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if(contactToEdit){
            setName(contactToEdit.name)
            setPhone(contactToEdit.phone)
            setEmail(contactToEdit.email)
        }
    }, [contactToEdit])

    useEffect(() => {
        getContactToEdit(params.id)
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        if(!name.trim() || !phone.trim() || !email.trim()){
            alert('Заполните поля')
            return
        }
        let editedContact = {
            ...contactToEdit,
            name: name,
            phone: phone,
            email: email,
        }
        saveEditedContact(editedContact)
        navigate('/')
    }

    if(!contactToEdit){
        return <h2>Loading...</h2>
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
                        <label htmlFor='inpCustom'>Edit name:</label>                    
                </Form.Floating>
                <Form.Floating className='mb-3'>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)}
                        type='tel'
                        value={phone}
                        id='inpCustom'
                    />
                        <label htmlFor='inpCustom'>Edit phone number:</label>                    
                </Form.Floating>
                <Form.Floating className='mb-3'>
                <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        value={email}
                        id='inpCustom'
                    />
                        <label htmlFor='inpCustom'>Edit your email:</label>                    
                </Form.Floating> 
               
                
                <Button type='submit' variant='outline-secondary'>
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default EditContact;