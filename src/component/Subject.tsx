export function Subject({subject,description}:{subject:string,description:string}) {
    return (
        <div>
            <h2>{subject}</h2>
            <p>{description}</p>
        </div>
    )
}