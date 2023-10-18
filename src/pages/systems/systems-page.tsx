import React from "react";
import { Link, useLoaderData } from "react-router-dom";


export function loader() {
  return [1, 2, 3, 4];
};

const SystemsPage = () => {
  const data = useLoaderData() as ReturnType<typeof loader>;

  return (
    <div>
      <h1>List of the product systems</h1>
      <ul>
        {
          data.map(uuid => {
            return (
              <li key={uuid} style={{ listStyle: "none" }}>
                <Link to={`/systems/${uuid}`}>
                  Product system {uuid}
                </Link>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
};

export default SystemsPage;