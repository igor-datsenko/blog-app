import './App.css'
import {useMemo} from "react";
import {routes} from "./routes.ts";
import {RouterProvider} from "react-router";

function App() {

    const router = useMemo(() => routes, [])

    return (
      <>
          {/*<Header />*/}
          {/*<Layout>*/}

          {/*</Layout>*/}
          <RouterProvider router={router} />

      </>
    )
}

export default App
