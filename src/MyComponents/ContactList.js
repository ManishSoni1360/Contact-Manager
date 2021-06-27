import './ContactList.css'
import React from 'react'


function ContactList(props) {
    if(props.AllContacts.length === 0){
        return (
            <div className="container">
                <h2>Contacts List</h2>
                <p>Oops! No Contact to display...</p>
            </div>
        )
    }
    else{
        return (
            <div >
                <h2>Contacts List</h2>
                <table>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {props.AllContacts.map((contact)=>{
                        return (
                            <tr>
                                <td>{contact.sno}</td>
                                <td>{contact.Name}</td>
                                <td>{contact.Email}</td>
                                <td><button className="btn btn-danger" onClick={()=>{props.onDelete(contact)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                    <tr>

                    </tr>
                </table>
            </div>
        )
    }
}

export default ContactList;
