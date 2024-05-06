export default function EducationDisplay ({ data }) {
    return (
        <>
            <p>{data.nameOfSchool}</p>
            <p>{data.degreeLevel}</p>
            <p>{data.fieldOfStudy}</p>
            <p>{data.datesOfStudy}</p>
        </>
    )
}