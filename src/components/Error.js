import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return(
        <div>
            <div>
                <h1>Oops!!!</h1>
                <p>You are at the wrong page!</p>
                <p>{error.status}: {error.statusText}</p>
            </div>
        </div>
    );
}

export default Error;