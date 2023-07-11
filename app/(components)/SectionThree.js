import PortfolioFlipCard from './PortfolioFlipCard'

const SectionThree = () => {
  return (
    <section id='page3' className='min-h-full bg-white relative z-0'>
      <h2 className='text-center text-6xl md:text-9xl md:text-center uppercase py-6 md:py-10 mb-0 font-mono text-accent'>
        Portfolio
      </h2>
      <PortfolioFlipCard />
    </section>
  )
}

export default SectionThree
/*

min-h-full bg-gradient-to-b from-black to-gray-500 relative z-0


prior:
flex items-center justify-center h-screen bg-gradient-to-b from-gray-500 to-black relative z-0
*/
