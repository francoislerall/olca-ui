import React, { Suspense } from "react";
import { Await, LoaderFunction, defer, useLoaderData, useParams } from "react-router-dom";
import { LoaderData } from "../../type";
import Error from "./components/error";
import { fakeResultFetch } from "../../fake-api";

export type ResultsProps = {
  result: number,
  method: string | null,
  regio: string | null,
}

export const loader = (async ({ request }: { request: Request }) => {
  const searchParam = new URL(request.url).searchParams;
  const method = searchParam.get("method");
  const regio = searchParam.get("regio");
  const data = fakeResultFetch({ method, regio });
  return defer({ data: data })
}
) satisfies LoaderFunction;

const ResultsPage = () => {
  const { uuid } = useParams();
  const { data } = useLoaderData() as LoaderData<typeof loader>;

  const renderResults = (props: ResultsProps) => {
    const { result, method, regio } = props;
    const methodText = method && method.length
      ? `with the method ${method}`
      : "without method";
    const regioText = regio === "on"
      ? "with regionalization"
      : "without regionalization";
    return (
      <div>
        <h4>
          Result of product system {uuid} {methodText} and {regioText}:</h4>
        <p>{result}</p>
      </div>
    )
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Suspense fallback={<h2>Calculating...</h2>}>
        <Await resolve={data} errorElement={<Error />}>
          {renderResults}
        </Await>
      </Suspense>
    </div>
  );
};

export default ResultsPage;
