export default function AboutYouDisplay ({ data }) {
    return (
        <div className="about-display">
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phoneNumber}</p>
        </div>
    )
}