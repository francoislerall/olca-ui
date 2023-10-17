import React from "react";
import { useParams, Link } from "react-router-dom";
import CalculationForm from "./calculation-form";

type SystemParams = {
  uuid: string;
};

const SystemPage = () => {
  const { uuid } = useParams<SystemParams>();

  return (
    <div>
      <h3>Product System {uuid}</h3>
      <CalculationForm uuid={uuid || ""} />
    </div>
  )
};

export default SystemPage;