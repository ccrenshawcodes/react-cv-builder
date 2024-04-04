import { useState } from 'react';

export default function PracticalExperience ({isActive, onEdit, onSubmit}) {

    const [info, setInfo] = useState({'Name of Company': '', Title: '', Responsibilities: '', 'Start and End Date': ''});
    if (isActive) {
        return (
            <>
                <label>Name of Company: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Name of Company': e.target.value})}
                />
                <label>Title:  </label>
                <input 
                    onChange={(e) => setInfo({...info, Title: e.target.value})}
                />
                <label>Responsibilities: </label>
                <input 
                    onChange={(e) => setInfo({...info, Responsibilities: e.target.value})}
                />
                <label>Start and End Dates: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Start and End Date': e.target.value})}
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