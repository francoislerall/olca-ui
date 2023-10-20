import { ResultsProps } from "./pages/results/results-page";
import { SystemData } from "./pages/system/system-page";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const slowFetch = async ({ method, regio }: {
  method: string | null,
  regio: string | null,
}) => {
  const data = {
    result: 24.0,
    method: method,
    regio: regio,
  } as ResultsProps;
  await sleep(2000);
  return data;
}

export const fakeResultFetch = async ({ method, regio }: {
  method: string | null,
  regio: string | null,
}) => {
  const data = {
    result: 24.0,
    method: method,
    regio: regio,
  } as ResultsProps;

  if (method === "slow") {
    return slowFetch({ method, regio });
  };

  if (method === "forbidden") {
    throw new Error("Method not found.")
  }

  return data;
}


export const fakeSystemFetch = async (uuid: string) => {
  await sleep(+uuid * 200);
  return {
    flow: "flour",
    amount: 42.0,
    unit: "kg",
  } as SystemData;
}
