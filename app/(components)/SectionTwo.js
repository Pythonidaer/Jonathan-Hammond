import PortfolioCard from './PortfolioCard'

const SectionTwo = () => {
  return (
    <section
      id='page2'
      className='min-h-full bg-gradient-to-b from-black to-gray-500 relative z-0'
    >
      <h1 className='text-center text-6xl md:text-9xl md:text-center uppercase py-6 md:py-10 mb-0 font-mono'>
        Portfolio
      </h1>
      <PortfolioCard />
    </section>
  )
}

export default SectionTwo
