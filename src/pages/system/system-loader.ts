import { LoaderFunction, defer } from 'react-router-dom'
import { fakeSystemFetch } from '../../fake-api'

export const loader = (async ({ params }) => {
  const { uuid } = params

  if (+(uuid || '0') > 3) {
    throw new Error('There is not such a product system.')
  }

  return defer({ data: fakeSystemFetch(uuid || '0') })
}) satisfies LoaderFunction
