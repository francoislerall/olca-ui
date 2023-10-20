import { Form } from 'react-router-dom'

type SystemFormProps = {
  uuid: string | undefined
  amount: number
  unit: string
  flow: string
}

const SystemForm = ({ uuid, amount, unit, flow }: SystemFormProps) => {
  return (
    <div>
      <h3>Reference product:</h3>
      <ul>
        <li key={flow} style={{ listStyle: 'none' }}>
          Flow: {flow}
        </li>
        <li key={amount} style={{ listStyle: 'none' }}>
          Amount: {amount}
        </li>
        <li key={unit} style={{ listStyle: 'none' }}>
          Unit: {unit}
        </li>
      </ul>

      <Form action={`/results/${uuid}`}>
        <h3>Select the calculation parameters</h3>

        <label>Impact assessment method:</label>

        <br />
        <br />

        <select name="method" title="method">
          <option value="">––– Select a method –––</option>
          <option value="ecoinvent">Ecoinvent</option>
          <option value="agribalyse">Agribalyse</option>
          <option value="forbidden">Does not exist</option>
          <option value="slow">Is slow</option>
        </select>

        <br />
        <br />

        <label>
          <input type="checkbox" name="regio" /> With regionalization?
        </label>

        <br />
        <br />

        <button>Run calculation</button>
      </Form>
    </div>
  )
}

export default SystemForm
