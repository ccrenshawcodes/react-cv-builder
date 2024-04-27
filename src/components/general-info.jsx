export default function GeneralInfo ({ data, onChange }) {

        return (
            <div className="input-section">
                <label>Name: </label>
                <input 
                    value={data.name}
                    onChange={(e) => onChange({...data, name: e.target.value})}
                />
                <label>Email address: </label>
                <input 
                    value={data.email}
                    onChange={(e) => onChange({...data, email: e.target.value})}
                />
                <label>Phone number: </label>
                <input 
                    value={data.phoneNumber}
                    onChange={(e) => onChange({...data, phoneNumber: e.target.value})}
                />
            </div>
        )
}