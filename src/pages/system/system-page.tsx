import { Suspense } from 'react'
import { useParams, useLoaderData, Await } from 'react-router-dom'
import SystemForm from './components/form'
import { LoaderData } from '../../type'
import { SystemData } from '../../fake-api'
import { loader } from './system-loader'

type SystemParams = {
  uuid: string
}

const SystemPage = () => {
  const { uuid } = useParams<SystemParams>()
  const { data } = useLoaderData() as LoaderData<typeof loader>

  const renderForm = (props: SystemData) => {
    const { amount, unit, flow } = props
    return <SystemForm uuid={uuid} amount={amount} unit={unit} flow={flow} />
  }

  return (
    <div>
      <h2>Product System n°{uuid}</h2>

      <Suspense fallback={<h2>Loading product system parameters...</h2>}>
        <Await resolve={data}>{renderForm}</Await>
      </Suspense>
    </div>
  )
}

export default SystemPage
