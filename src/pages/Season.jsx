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

// Displays when a season is selected - Outlet: See Plant.jsx
export function Season(props) {
  const { children } = props
   return (
    <>
       <h1>
         Season
       </h1>
         <main>{children || <Outlet />}</main>
      </>
   )
}

// Displays when no season is selected
export function SelectSeason() {
  return (
      <h1>
        SeasonSelect
      </h1>
  )
}
