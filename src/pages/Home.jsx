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

// Displays if World.jsx is not
export default function Home(props) {
  const { children } = props
   return (
    <>
       <h1>
         Home
       </h1>
    </>
   )
}
