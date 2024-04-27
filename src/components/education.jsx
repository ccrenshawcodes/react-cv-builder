export default function EducationData ({ data, onChange }) {

        return (
            <div className="input-section">
                <label>Name of School: </label>
                <input 
                    value={data['Name of School']}
                    onChange={(e) => onChange({...data, 'Name of School': e.target.value})}
                />
                <label>Degree Level: </label>
                <input 
                    value={data['Degree Level']}
                    onChange={(e) => onChange({...data, 'Degree Level': e.target.value})}
                />
                <label>Field of Study: </label>
                <input 
                    value={data['Field of Study']}
                    onChange={(e) => onChange({...data, 'Field of Study': e.target.value})}
                />
                <label>Dates of Study: </label>
                <input 
                    value={data['Dates of Study']}
                    onChange={(e) => onChange({...data, 'Dates of Study': e.target.value})}
                />
            </div>
        )
}