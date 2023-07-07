import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-2 bg-gray-200'>
      <div className='flex items-center'>
        <Link className='text-xl font-bold text-gray-800' href='/'>
          Logo
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link className='text-gray-800' href='/link1'>
          Link 1
        </Link>
        <Link className='text-gray-800' href='/link2'>
          Link 2
        </Link>
        <Link className='text-gray-800' href='/link3'>
          Link 3
        </Link>
        <Link className='text-gray-800' href='/link4'>
          Link 4
        </Link>
      </div>
    </header>
  )
}

export default Header
