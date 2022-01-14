import React, { useContext, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactProvider';

const MainPage = () => {

    const {contacts, getContacts, deleteContact} = useContext(ContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    if(!contacts){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Table striped bordered hover variant='light'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>
                            <Link to={`/edit/${item.name}/${item.id}`}>
                            <Button className='action-btn m-3' variant='outline-dark'>Edit</Button>
                            </Link>
                            <Button
                            onClick={() => deleteContact(item.id)}
                            className='action-btn btn-danger'
                            variant='outline-dark'>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </div>
    );
};

export default MainPage;