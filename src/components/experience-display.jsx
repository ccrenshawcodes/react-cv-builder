export default function ExperienceDisplay ({ data }) {
    return (
        <>
            <p>{data.nameOfCompany}</p>
            <p>{data.Title}</p>
            <p>{data.Responsibilities}</p>
            <p>{data.startEndDates}</p>
        </>
    )
}