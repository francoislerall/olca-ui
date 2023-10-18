import React, { FormEvent, useState } from "react";
import FormComponent from "./components/calculation-form";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { SystemParams } from "./system-page";


interface ICalculationState {
  impactAssessmentMethod: string,
  withRegionalization: boolean,
}

const Calculation = () => {
  const { uuid } = useParams<SystemParams>();
  const [state, setState] = useState({
    impactAssessmentMethod: "",
    withRegionalization: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.currentTarget;

    if (Object.keys(state).includes(name)) {
      setState({
        ...state,
        [name]: type === "checkbox" ? checked : value
      } as unknown as Pick<ICalculationState, keyof ICalculationState>);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.currentTarget;

    if (Object.keys(state).includes(name)) {
      setState({
        ...state,
        [name]: value
      } as unknown as Pick<ICalculationState, keyof ICalculationState>);
    }
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const query = createSearchParams([
      ["method", state.impactAssessmentMethod],
      ["regio", `${state.withRegionalization}`],
    ])
    navigate({
      pathname: `/results/${uuid}/`,
      search: query.toString()
  });
  };

  return (
      <FormComponent
        {...state}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
      />
    )
  };

export default Calculation;
