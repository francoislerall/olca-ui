import React, { ChangeEventHandler, FormEventHandler } from "react";


export interface IFormComponentProps {
  impactAssessmentMethod: string,
  withRegionalization: boolean,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  handleSelect: ChangeEventHandler<HTMLSelectElement>,
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
}

const FormComponent = (props: IFormComponentProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h5>Select the calculation paramaters</h5>

      <label>Impact assessment method:</label>
      <br />

      <select
        name='impactAssessmentMethod'
        title='impactAssessmentMethod'
        value={props.impactAssessmentMethod}
        onChange={props.handleSelect}
      >
        <option value="">--- Select a method ---</option>
        <option value="method-1">Method 1</option>
        <option value="method-2">Method 2</option>
      </select>

      <br />
      <br />

      <label>
        <input
          type='checkbox'
          name='withRegionalization'
          checked={props.withRegionalization}
          onChange={props.handleChange}
        /> With regionalization?
      </label>

      <br />
      <br />

      <button>Run calculation</button>
    </form>
  );
};

export default FormComponent;
