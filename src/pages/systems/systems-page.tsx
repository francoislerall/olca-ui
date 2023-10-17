import React from "react";
import { Link } from "react-router-dom";


const SystemsPage = () => {
  return (
    <div>
      <h1>List of the product systems</h1>
      <ul>
        {
          [1, 2, 3, 4].map(uuid => {
            return (
              <li style={{ listStyle: "none" }}>
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