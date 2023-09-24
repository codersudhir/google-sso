"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname=usePathname()
const router=useRouter()
  return (
    <header style={{marginBottom:"50px"}}>
    <nav>
      {/* this header buuton only visible in dahbaord page  */}
     {pathname==="/Dashboard"&& <button style={{backgroundColor:"red",color:"white",justifyContent:"end"}} onClick={()=>router.push("/")} >Logout</button>}
     </nav></header>
  )
}

export default Header
