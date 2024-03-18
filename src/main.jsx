import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global, css } from '@emotion/react'

import App                          from './App.jsx'
import Home                         from './pages/Home.jsx'
import World                        from './pages/World.jsx'
import { SelectLocation, Location } from './pages/Location.jsx'
import { SelectSeason, Season }     from './pages/Season.jsx'
import { SelectPlant, Plant }       from './pages/Plant.jsx'
import ErrorPage                    from './pages/ErrorPage.jsx'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <App> <ErrorPage /> </App>,
      children: [
         { index: true, element: <Home /> },
         { path: "all", element: <World />, children: [
            { index: true, element: <SelectLocation /> },
            { path: ":location", element: <Location />, children: [
               { index: true, element: <SelectSeason /> },
               { path: ":season", element: <Season />, children: [
                  { index: true, element: <SelectPlant /> },
                  { path: ":plant", element: <Plant />  }
               ]}
            ]}
         ]}
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Global styles={globalStyles} />
      <RouterProvider router={router}/>
   </React.StrictMode>
)