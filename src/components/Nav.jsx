import React from 'react'
import { Link } from "react-router-dom"


function Nav() {
  return (
    <>
      <ul>
        <Link to="/Janurary">
        <li>Januray</li>
        </Link>
        <Link to="/Feburary">
        <li>Feburary</li>
        </Link>
        <Link to="/March">
        <li>March</li>
        </Link>
        <Link to="/April">
        <li>April</li>
        </Link>
        <Link to="/May">
        <li>May</li>
        </Link>
        <Link to="/June">
        <li>June</li>
        </Link>
        <Link to="/July">
        <li>July</li>
        </Link>
        <Link to="/August">
        <li>August</li>
        </Link>
        <Link to="/September">
        <li>September</li>
        </Link>
        <Link to="/October">
        <li>October</li>
        </Link>
        <Link to="/November">
        <li>November</li>
        </Link>
        <Link to="/December">
        <li>December</li>
        </Link>
      </ul>
    </>
  )
}

export default Nav
