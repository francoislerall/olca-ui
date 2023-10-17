import React from "react";
import { useParams, useSearchParams } from "react-router-dom";


const ResultsPage = () => {
  const { uuid } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const impactAssessmentMethod = searchParams.get("impactAssessmentMethod")
  const withRegionalization = searchParams.get("withRegionalization")


  return (
    <div style={{ textAlign: "center" }}>
      <h4>Result of product system {uuid} with the method {impactAssessmentMethod} and {withRegionalization === "true" ? "with" : "without"} regionalization.</h4>
    </div>
  );
};

export default ResultsPage;
