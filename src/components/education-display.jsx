export default function EducationDisplay ({ data }) {
    return (
        <div className="education-display">
            {
                data.nameOfSchool && (
                    <h2>Education</h2>
                )
            }
            <p>{data.nameOfSchool}</p>
            <p>{data.degreeLevel}</p>
            <p>{data.fieldOfStudy}</p>
            <p>{data.datesOfStudy}</p>
        </div>
    )
}