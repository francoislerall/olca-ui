import { Await, useLoaderData, useParams } from 'react-router-dom'
import { LoaderData } from '../../type'
import Error from './components/error'
import { ResultsData } from '../../fake-api'
import { Suspense } from 'react'
import { loader } from './results-loader'

const ResultsPage = () => {
  const { uuid } = useParams()
  const { data } = useLoaderData() as LoaderData<typeof loader>

  const renderResults = (props: ResultsData) => {
    const { result, method, regio } = props

    const methodText =
      method && method.length ? `with the method ${method}` : 'without method'
    const regioText =
      regio === 'on' ? 'with regionalization' : 'without regionalization'

    return (
      <div>
        <h4>
          Result of product system {uuid} {methodText} and {regioText}:
        </h4>
        <p>{result}</p>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Suspense fallback={<h2>Calculating...</h2>}>
        <Await resolve={data} errorElement={<Error />}>
          {renderResults}
        </Await>
      </Suspense>
    </div>
  )
}

export default ResultsPage
