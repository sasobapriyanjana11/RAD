import {Link} from "react-router";

export const Error = () => {
    return (
        <>
            <h1>Page not found!</h1>
            <Link to="/">Go Back</Link>
        </>
    );
};