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

// Displays when a location is selected - Outlet: See Season.jsx
export function Location(props) {
  const { children } = props
   return (
    <>
       <h1>
         Location
       </h1>
         <main>{children || <Outlet />}</main>
      </>
   )
}

// Displays when no location is selected
export function SelectLocation() {
  return (
      <h1>
        LocationSelect
      </h1>
  )
}
