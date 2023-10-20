import { LoaderFunction, defer } from 'react-router-dom'
import { fakeResultFetch } from '../../fake-api'

export const loader = (async ({ request }: { request: Request }) => {
  const searchParam = new URL(request.url).searchParams
  const method = searchParam.get('method')
  const regio = searchParam.get('regio')
  const data = fakeResultFetch({ method, regio })
  return defer({ data: data })
}) satisfies LoaderFunction
