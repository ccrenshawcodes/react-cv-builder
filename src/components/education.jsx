import { useState } from 'react';

export default function EducationInfo ({title}, onSubmit) {

    const [info, setInfo] = useState({'Name of School': '', 'Degree Level': '', 'Field of Study': '', 'Dates of Study': ''});

        return (
            <>
                <h2>{title}</h2>
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
}