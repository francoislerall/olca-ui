import React from "react";
import { useParams, useLoaderData, Form } from "react-router-dom";


export function loader() {
  return {
    flow: "flour",
    amount: 42.0,
    unit: "kg",
  }
}

export type SystemParams = {
  uuid: string;
};

const SystemPage = () => {
  const { uuid } = useParams<SystemParams>();
  const { flow, amount, unit } = useLoaderData() as ReturnType<typeof loader>;

  return (
    <div>
      <h3>Product System {uuid} with {amount} {unit} of {flow}.</h3>
      <Form action={`/results/${uuid}`}>
        <h5>Select the calculation paramaters</h5>

        <label>Impact assessment method:</label>
        <br />

        <select
          name='method'
          title='method'
        >
          <option value="">––– Select a method –––</option>
          <option value="ecoinvent">Ecoinvent</option>
          <option value="agribalyse">Agribalyse</option>
          <option value="forbidden">Does not exist</option>
        </select>

        <br />
        <br />

        <label>
          <input
            type='checkbox'
            name='regio'
          /> With regionalization?
        </label>

        <br />
        <br />

        <button>Run calculation</button>
      </Form>
    </div>
  )
};

export default SystemPage;
