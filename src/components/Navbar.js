import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <h1>FinEdge</h1>
        </div>
        <div>
          <Link className="text-white mr-4" to="/">Home</Link>
          <Link className="text-white mr-4" to="/about">About Us</Link>
          <Link className="text-white mr-4" to="/services">Services</Link>
          <Link className="text-white" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
