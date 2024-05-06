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

/* 
    An issue we're having here is that the data is nested. When we do this we're just adding new fields.
    We're not actually accessing the existing nested data

        value={data['Degree Level']}
        onChange={(e) => onChange({...data[0], 'Degree Level': e.target.value})}
        --> Puts the value from the input field in the right spot ONCE.
        Then seems to overwrite everything else in the object with just the 'Degree Level' field. 
        Adding ...data[0] to another field does not help with this.

        adding [0] to the data instance in the value field breaks things.

        adding data[0] right before the field name (with brackets around the field name) REALLY breaks everything

        I get the same types of issues when I add [0] to data={education[0]} in App.jsx. 

        The problem is that somewhere in the SET function I'm replacing everything in the object with ONE thing.
        I need to find a different way to do the state setter. Maybe something that would work on the App.jsx level too
        just to make sure I'm covering my bases.... 

        https://react.dev/reference/react/useState#examples-objects - I should study the "array" portion of this
        

*/