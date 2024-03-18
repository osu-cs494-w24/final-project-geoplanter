import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   Link,
   NavLink,
   Outlet,
   useParams,
   useSearchParams,
   useRouteError,
   parsePath
} from 'react-router-dom'

export default function App(props) {
   const { children } = props
   return (
      <>
         <h1>
            This is the App!
         </h1>
         <main>{children || <Outlet />}</main>
      </>
   )
}
