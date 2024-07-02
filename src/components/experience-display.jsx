export default function ExperienceDisplay ({ data }) {
    return (
        <div className="experience-display">
            {
                data.nameOfCompany && (
                    <h2>Experience</h2>
                )
            }
            <p>{data.nameOfCompany}</p>
            <p>{data.Title}</p>
            <p>{data.Responsibilities}</p>
            <p>{data.startEndDates}</p>
        </div>
    )
}