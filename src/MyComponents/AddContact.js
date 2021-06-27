import React, { useState } from 'react'

function AddContact(props) {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");

    const add = (e) => {
        e.preventDefault();
        if (!Name || !Email) {
            alert("Name and Email fields are mandatory");
        }
        else {
            props.addContact(Name, Email);
            setName("");
            setEmail("");
        }
    }

    return (
        <div className="container my-3" >
            <form onSubmit={add}>
                <div className="form-group">
                    <label htmlFor="exampleInputName"><h3>Contact Name</h3></label>
                    <input type="text" className="form-control" id="exampleInputName" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Contact Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail"><h3>Email address</h3></label>
                    <input type="email" className="form-control" id="exampleInputEmail" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;