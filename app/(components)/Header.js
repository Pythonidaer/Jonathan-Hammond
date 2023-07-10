'use client'
import * as Scroll from 'react-scroll'
import Link from 'next/link'
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import Image from 'next/image'
import mechArm from '../../public/mech-arm.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-2 bg-gray-200 border-b-4 border-cyan-500'>
      <div className='flex items-center'>
        <Link className='text-xl font-bold text-gray-800' href='/'>
          <Image
            src={mechArm}
            alt='3D Render of Michaelangelos David'
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <ScrollLink
          activeClass='active'
          className='text-gray-800 transform duration-300 cursor-pointer hover:text-black hover:font-semibold'
          to='page2'
          spy={true}
          smooth={true}
          delay={0}
          offset={0}
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          className='text-gray-800 transform duration-300 cursor-pointer hover:text-black hover:font-semibold'
          to='page3'
          spy={true}
          smooth={true}
          delay={0}
          offset={0}
          duration={500}
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          className='text-gray-800 transform duration-300 cursor-pointer hover:text-black hover:font-semibold '
          to='page4'
          spy={true}
          smooth={true}
          delay={0}
          offset={0}
          duration={200}
        >
          Contact
        </ScrollLink>
      </div>
    </header>
  )
}

export default Header
