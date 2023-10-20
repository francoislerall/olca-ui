import { Link, useLoaderData } from "react-router-dom"
import { loader } from "./systems-loader"


const SystemsPage = () => {
  const data = useLoaderData() as ReturnType<typeof loader>

  return (
    <div>
      <h1>List of the product systems</h1>
      <ul>
        {data.map((uuid) => {
          return (
            <li key={uuid}>
              <Link to={uuid}>Product system {uuid}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SystemsPage
