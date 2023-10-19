import React, { Suspense } from "react";
import { useParams, useLoaderData, defer, Await, LoaderFunction } from "react-router-dom";
import SystemForm from "./components/form";
import { LoaderData } from "../../type";


type SystemData = {
  flow: string,
  amount: number,
  unit: string,
}

type SystemParams = {
  uuid: string;
};

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const fakeFetch = async (uuid: string) => {
  await sleep(+uuid * 200);
  return {
    flow: "flour",
    amount: 42.0,
    unit: "kg",
  } as SystemData;
}

export const loader = (async ({ params }) => {
  const { uuid } = params;

  if (+(uuid || "0") > 3) {
    throw new Error("There is not such a product system.");
  };

  return defer({ data: fakeFetch(uuid || "0") });
}) satisfies LoaderFunction;

const SystemPage = () => {
  const { uuid } = useParams<SystemParams>();

  const { data } = useLoaderData() as LoaderData<typeof loader>;

  const renderForm = (props: SystemData) => {
    const { amount, unit, flow } = props;
    return <SystemForm
      uuid={uuid}
      amount={amount}
      unit={unit}
      flow={flow}
    />
  }

  return (
    <div>
      <h2>Product System n°{uuid}</h2>

      <Suspense fallback={<h2>Loading product system parameters...</h2>}>
        <Await resolve={data}>
          {renderForm}
        </Await>
      </Suspense>
    </div>
  )
};

export default SystemPage;
