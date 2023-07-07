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

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-2 bg-gray-200'>
      <div className='flex items-center'>
        <Link className='text-xl font-bold text-gray-800' href='/'>
          Logo
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <ScrollLink
          activeClass='active'
          className='text-gray-800'
          to='page1'
          spy={true}
          smooth={true}
          delay={0}
          offset={50}
          duration={500}
        >
          Link 1
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          className='text-gray-800'
          to='page2'
          spy={true}
          smooth={true}
          delay={0}
          offset={50}
          duration={500}
        >
          Link 2
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          className='text-gray-800'
          to='page3'
          spy={true}
          smooth={true}
          delay={0}
          offset={50}
          duration={200}
        >
          Link 3
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          className='text-gray-800'
          to='page4'
          spy={true}
          smooth={true}
          delay={0}
          offset={50}
          duration={500}
        >
          Link 4
        </ScrollLink>
      </div>
    </header>
  )
}

export default Header
/*
    <header className='flex items-center justify-between px-4 py-2 bg-gray-200'>
      <div className='flex items-center'>
        <Link className='text-xl font-bold text-gray-800' href='/'>
          Logo
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link className='text-gray-800' href='#page1'>
          Link 1
        </Link>
        <Link className='text-gray-800' href='#page2'>
          Link 2
        </Link>
        <Link className='text-gray-800' href='#page3'>
          Link 3
        </Link>
        <Link className='text-gray-800' href='/link4'>
          Link 4
        </Link>
      </div>
    </header>
    */

/*
    <header className='flex items-center justify-between px-4 py-2 bg-gray-200'>
      <div className='flex items-center'>
        <Link className='text-xl font-bold text-gray-800' href='/'>
          Logo
        </Link>

                      <Link
        activeClass='active'
        className='text-xl font-bold text-gray-800'
        to='/'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Link 1
      </Link>
      </div>
      <div className='flex items-center space-x-4'>
              <Link
        activeClass='active'
        className='text-gray-800' 
        to='page1'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Link 1
      </Link>
              <Link
        activeClass='active'
        className='text-gray-800' 
        to='page2'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Link 2
      </Link>
              <Link
        activeClass='active'
        className='text-gray-800' 
        to='page3'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Link 3
      </Link>
              <Link
        activeClass='active'
        className='text-gray-800' 
        to='page4'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Link 4
      </Link>

              <Link
        activeClass='active'
        className='text-gray-800' 
        to='page3'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Test 1
      </Link>
      </div>
    </header>
    */
