import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div>
      <h1>Error while rendering this page!</h1>
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default ErrorComponent;
