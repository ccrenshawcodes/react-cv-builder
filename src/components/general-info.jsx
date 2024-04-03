import { useState } from 'react';

export default function GeneralInfo ({title}, onSubmit) {

    const [info, setInfo] = useState({name: '', email: '', phoneNumber: ''});

        return (
            <>
                <h2>{title}</h2>
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
}