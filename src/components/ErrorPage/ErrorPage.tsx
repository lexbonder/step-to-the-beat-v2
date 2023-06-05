import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // console.log('Error Occured!!');
    // console.error('Error Status:', error.status);

    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );

  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    )
  } else {
    return <></>;
  }
}