import React from "react";
import { useParams, Link } from "react-router-dom";
import Calculation from "./calculation";


export type SystemParams = {
  uuid: string;
};

const SystemPage = () => {
  const { uuid } = useParams<SystemParams>();

  return (
    <div>
      <h3>Product System {uuid}</h3>
      <Calculation />
    </div>
  )
};

export default SystemPage;
