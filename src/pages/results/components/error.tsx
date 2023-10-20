import { useAsyncError } from 'react-router-dom'

const Error = () => {
  const error = useAsyncError() as { message: string }
  return (
    <div>
      <h2>Error while calculating the results.</h2>
      <h3>{error.message}</h3>
    </div>
  )
}

export default Error
