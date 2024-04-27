export default function PracticalExperience ({ data, onChange }) {

        return (
            <div className="input-section">
                <label>Name of Company: </label>
                <input 
                    value={data['Name of Company']}
                    onChange={(e) => onChange({...data, 'Name of Company': e.target.value})}
                />
                <label>Title:  </label>
                <input 
                    value={data.Title}
                    onChange={(e) => onChange({...data, Title: e.target.value})}
                />
                <label>Responsibilities: </label>
                <input 
                    value={data.Responsibilities}
                    onChange={(e) => onChange({...data, Responsibilities: e.target.value})}
                />
                <label>Start and End Dates: </label>
                <input 
                    value={data['Start and End Date']}
                    onChange={(e) => onChange({...data, 'Start and End Date': e.target.value})}
                />
            </div>
        )
}