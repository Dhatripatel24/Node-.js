import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"15px"}}>
      <Link style={{textDecoration:"none",color:"black",fontSize:"20px"}} to={"/"}>BLOGS</Link>
      <Link style={{textDecoration:"none",color:"black",fontSize:"20px"}} to={"/addbook"}>ADDBLOGS</Link>
      <Link style={{textDecoration:"none",color:"black",fontSize:"20px"}} to={"/editbook/:_id"}>EDITBLOGS</Link>
    </div>
  )
}

export default Navbar
