import React from "react";
import { useParams } from "react-router-dom";

const ResultsPage = () => {
  const { uuid } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Result of product system {uuid}</h4>
    </div>
  );
};

export default ResultsPage;
