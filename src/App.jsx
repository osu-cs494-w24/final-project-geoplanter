import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import SearchBar from './components/SearchBar'

import './style.css'

/*
   Displays all of the constant website components
*/
export default function App(props) {
   const { children } = props

   // The header/navbar, searchbar, and footer are constant
   return (
      <>
         <header>
            GEOPLANTER
         </header>
         <nav>
            <ul>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/">
                  <img src="/logo.png" alt="Logo" />
               </NavLink></li>
               <li><NavLink to="/map">Map</NavLink></li>
            </ul>
         </nav>
         <SearchBar />
         <main>{children || <Outlet />}</main>
         <footer>
            Footer
         </footer>
      </>
   )
}
