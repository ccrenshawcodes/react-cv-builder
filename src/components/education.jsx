import { useState } from 'react';

export default function EducationInfo ({isActive, onEdit, onSubmit}) {

    const [info, setInfo] = useState({'Name of School': '', 'Degree Level': '', 'Field of Study': '', 'Dates of Study': ''});
    if (isActive) {
        return (
            <>
                <label>Name of School: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Name of School': e.target.value})}
                />
                <label>Degree Level: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Degree Level': e.target.value})}
                />
                <label>Field of Study: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Field of Study': e.target.value})}
                />
                <label>Dates of Study: </label>
                <input 
                    onChange={(e) => setInfo({...info, 'Dates of Study': e.target.value})}
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