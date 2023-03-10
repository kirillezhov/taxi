import React from 'react';
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    if (!isRouteErrorResponse(error)) {
        // @ts-ignore
        return <p>{error.message}</p>;
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText}</i>
            </p>
        </div>
    );
}

export default ErrorPage;