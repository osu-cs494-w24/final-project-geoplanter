import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App                    from './App'
import Home                   from './pages/Home'
import Map                    from './pages/Map'
import { Location }           from './pages/Location'
import { SelectPlant, Plant } from './pages/Plant'
import ErrorPage              from './pages/ErrorPage'

import './style.css'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <App> <ErrorPage /> </App>,
      children: [
         { index: true, element: <Home /> },
         { path: ":location", element: <Location />, children: [
            { index: true, element: <SelectPlant /> },
            { path: ":plant", element: <Plant />  }
         ]},
         { path: "map", element: <Map /> },
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router}/>
   </React.StrictMode>
)