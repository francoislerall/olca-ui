const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export type ResultsData = {
  result: number
  method: string | null
  regio: string | null
}

const slowFetch = async ({
  method,
  regio,
}: {
  method: string | null
  regio: string | null
}) => {
  const data = {
    result: 24.0,
    method: method,
    regio: regio,
  } as ResultsData
  await sleep(2000)
  return data
}

export const fakeResultFetch = async ({
  method,
  regio,
}: {
  method: string | null
  regio: string | null
}) => {
  const data = {
    result: 24.0,
    method: method,
    regio: regio,
  } as ResultsData

  if (method === 'slow') {
    return slowFetch({ method, regio })
  }

  if (method === 'forbidden') {
    throw new Error('Method not found.')
  }

  return data
}
export type SystemData = {
  flow: string
  amount: number
  unit: string
}

export const fakeSystemFetch = async (uuid: string) => {
  await sleep(+uuid * 200)
  return {
    flow: 'flour',
    amount: 42.0,
    unit: 'kg',
  } as SystemData
}
