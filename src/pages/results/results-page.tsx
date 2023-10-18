import React from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";


export function loader({ request }: { request: Request }) {
  const searchParam = new URL(request.url).searchParams;
  
  if (searchParam.get("method") === "forbidden") {
    throw new Error("The method does not exist!")
  }
  
  return {
    result: 24.0,
    method: searchParam.get("method"),
    regio: searchParam.get("regio"),
  }
}

const ResultsPage = () => {
  const { uuid } = useParams();
  const { result, method, regio } = useLoaderData() as ReturnType<typeof loader>;

  const methodText = method && method.length
    ? `with the method ${method}`
    : "without method";
  const regioText = regio === "on"
    ? "with regionalization"
    : "without regionalization";

  return (
    <div style={{ textAlign: "center" }}>
      <h4>
        Result of product system {uuid} {methodText} and {regioText}:</h4>
      <p>{result}</p>
    </div>
  );
};

export default ResultsPage;
