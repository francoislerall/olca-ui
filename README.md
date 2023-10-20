# openLCA web UI - Proof of concept

## Description

This project aims at testing and showing that the new features of React Router are worth investigating and implementing.

 - `createBrowserRouter` to simply organize the `Route`,
 - `errorElement` together with `useRouteError` to render a error component if needed,
 - `loader` to provide data to the route element before it renders (see `systems-page`),
 - `defer` in `loader` function together with `Await`/`Suspense` (see `system-page`, `results-page`),
 - `Form` from React Router, a quick simple way to make a form without handler and submit function (must have!). This form simply do a fetch with its entries (e.g. `http://localhost:3000/results/2?method=agribalyse&regio=on`). Advantage:
    - user can share the link with the parameters,
    - URLs are stored in history, easy to come back to it (previous/next page),
    - users can refresh the page with the same UI,
    - users can directly edit the URL,
    - users can easily save the URLs.
  
## Features
- layout with a header and a footer as every React app,
- `/system`: list of product systems. When clicking on an item, it fakely fetches the data with a duration proportional to the indices. N°4 is nower to be found on the server.
- `/system/:uuid` the corresponding product systems. The choice of the method allow to play with different scenarios.
- `results` the results page for the corresponding product systems and calculation setup.

## Available Scripts

In the project directory, you can run with [Bun](https://bun.sh/):

### `bun dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `bun run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
