export default function EducationData ({ data, onChange }) {

    return (
            <div className="input-section">
                {data.map((entry, i) => (
                    <>
                        <div key={i}>
                            <label>Name of School: </label>
                            <input
                                type="text"
                                value={entry.nameOfSchool}
                                onChange={(e) => onChange(i, "nameOfSchool", e.target.value)}
                                />
                        </div>
                        <div key={i}>
                            <label>Degree Level: </label>
                            <input
                                type="text"
                                value={entry.degreeLevel}
                                onChange={(e) => onChange(i, "degreeLevel", e.target.value)}
                            />
                        </div>
                        <div key={i}>
                            <label>Field of Study: </label>
                            <input
                                type="text"
                                value={entry.fieldOfStudy}
                                onChange={(e) => onChange(i, "fieldOfStudy", e.target.value)}
                            />
                        </div>
                        <div key={i}>
                            <label>Dates of Study: </label>
                            <input
                                type="text"
                                value={entry.datesOfStudy}
                                onChange={(e) => onChange(i, "datesOfStudy", e.target.value)}
                            />
                        </div>
                    </>
                ))}
            </div>
        )
}

