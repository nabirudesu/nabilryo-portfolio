import { useState } from 'react';
import '../App.css';
import { Link } from "react-scroll"

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home')
  const navItems = [
    { id: 1, href: "about", text: "About" }, { id: 2, href: "education", text: "Education" }, { id: 3, href: "projects", text: "Projects" }, { id: 4, href: "experience", text: "Experience" }, { id: 5, href: "resume", text: "Resume" }, { id: 6, href: "contact", text: "Contact" }
  ]
  return (
    <div className='flex justify-between fixed bg-gray-800 w-full'>
      <p id='phome' className='pl-20 py-2 text-gray-100 text-left'>
        <Link 
        to={"home"} 
        onClick={() => setActiveLink("Home")}
        activeClass='active'
        smooth spy>
          Nabil Ryo
        </Link>
      </p>
      <div className=' space-x-4  px-4 py-2'>
        <ul className='flex flex-row gap-4'>
          {navItems.map(item => 
          <li>
            <Link 
              to={item.href} 
              activeClass='active'
              className={`text-gray-300 bg-gray-800  hover:text-white rounded-md px-3 py-2 text-sm font-medium `}            
              smooth spy
              onClick={()=> setActiveLink(item.href)}
              > 
              {item.text}
            </Link>
            </li>)}
          </ul>
      </div>
    </div>
  )
}

export default NavBar