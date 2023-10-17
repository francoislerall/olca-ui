import React, { FormEvent } from "react";
import { Link, Navigate, redirect } from "react-router-dom";

const CalculationForm = ({ uuid }: {
  uuid: string
}) => {
  return (
    <Link to={`/results/${uuid}`}>Get result</Link>
  )
};

export default CalculationForm;