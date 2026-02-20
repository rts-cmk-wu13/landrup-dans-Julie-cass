'use client'
import { CiHome } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";

import "./navigation.css"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function NavigationMenu() {
  const pathname = usePathname()
 
  return (
    <section className="NavligationSec">
<div className="NavWrapper">

    <nav className="NavigationBox">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          <div className="NavTextBox">
<p><CiHome /></p>
      <p> Home </p>
       </div>
      </Link>
 
      <Link
        className={`link ${pathname === '/activities' ? 'active' : ''}`}
        href="/activities"
      >
       <div className="NavTextBox">
<p><HiOutlineMenu /></p>
      <p> Aktiviteter </p>
       </div>
      </Link>

           <Link
        className={`link ${pathname === '/profile' ? 'active' : ''}`}
        href="/profile"
      >
      <div className="NavTextBox">
<p><IoMdPerson /></p>
      <p> Profil </p>
       </div>
      </Link>
    </nav>

    </div>
    </section>
  )
}