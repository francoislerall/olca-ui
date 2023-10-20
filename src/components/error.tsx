import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
  const error = useRouteError()
  const errorMessage = error instanceof Error ? error.message : 'Unknown error.'

  return (
    <div>
      <h1>Error while rendering this page!</h1>
      <h3>{errorMessage}</h3>
    </div>
  )
}

export default ErrorComponent
