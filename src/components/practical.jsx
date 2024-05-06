export default function PracticalExperience ({ data, onChange }) {

    return (
        <div className="input-section">

            {data.map((entry, i) => (
                <>
                    <div key={i}>
                        <label>Name of Company: </label>
                        <input
                            type="text"
                            value={entry.nameOfCompany}
                            onChange={(e) => onChange(i, "nameOfCompany", e.target.value)}
                            />
                    </div>
                    <div key={i}>
                        <label>Title: </label>
                        <input
                            type="text"
                            value={entry.Title}
                            onChange={(e) => onChange(i, "Title", e.target.value)}
                        />
                    </div>
                    <div key={i}>
                        <label>Responsibilities: </label>
                        <input
                            type="text"
                            value={entry.Responsibilities}
                            onChange={(e) => onChange(i, "Responsibilities", e.target.value)}
                        />
                    </div>
                    <div key={i}>
                        <label>Start and End Dates: </label>
                        <input
                            type="text"
                            value={entry.startEndDates}
                            onChange={(e) => onChange(i, "startEndDates", e.target.value)}
                        />
                    </div>
                </>
            ))}
        </div>
    )
}