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

// Displays if Home.jsx is not- Outlet: See Location.jsx
export default function World(props) {
  const { children } = props
   return (
    <>
       <h1>
         World
       </h1>
         <main>{children || <Outlet />}</main>
      </>
   )
}
