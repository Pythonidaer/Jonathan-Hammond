import PortfolioFlipCard from './PortfolioFlipCard'

const Portfolio = () => {
  return (
    <section id='page3' className='min-h-full bg-white relative z-0'>
      <h2 className='text-center text-4xl min-[350px]:text-6xl md:text-9xl md:text-center uppercase pt-6 md:pt-10 mb-2 font-mono text-accent'>
        Portfolio
      </h2>
      <p className=' text-xl min-[350px]:text-xl md:text-4xl w-4/5 my-8 md:mb-12 mx-auto text-accent text-center animate-pulse'>
        Please feel free to explore some of my proudest project creations to
        date.
      </p>
      <PortfolioFlipCard />
    </section>
  )
}

export default Portfolio
