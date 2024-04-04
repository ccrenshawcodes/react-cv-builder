import { useState } from 'react';

export default function GeneralInfo ({isActive, onEdit, onSubmit}) {

    const [info, setInfo] = useState({name: '', email: '', phoneNumber: ''});
    if (isActive) {
        return (
            <>
                <label>Name: </label>
                <input 
                    onChange={(e) => setInfo({...info, name: e.target.value})}
                />
                <label>Email address: </label>
                <input 
                    onChange={(e) => setInfo({...info, email: e.target.value})}
                />
                <label>Phone number: </label>
                <input 
                    onChange={(e) => setInfo({...info, phoneNumber: e.target.value})}
                />
                <button onClick={onSubmit}>Submit</button>
            </>
        )
    } else {
        return (
            <button onClick={onEdit}>Edit</button>
        )
    }
}