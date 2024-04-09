import styles from './About.module.css'

const About = () => {
  return (
    <section
      id='page2'
      className={`min-h-full bg-black relative z-0 ${styles.page2} pb-7`}
    >
      <h2 className='text-center text-4xl min-[350px]:text-6xl md:text-9xl md:text-center uppercase py-6 md:py-10 mb-0 font-mono'>
        Greetings!
      </h2>
      <div className='w-11/12 md:w-5/6 lg:w-1/2 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        <div className='col-span-1 md:col-span-1 lg:col-span-1'>
          <div>
            <h2 className='mb-7 text-2xl'>About</h2>
          </div>
        </div>
        <div className='col-span-1 pb-7 md:col-span-2 '>
          <div>
            <p className='text-2xl'>
              I am a React-focused Frontend Engineer who has a passion for visualizing data. I look forward to evolving into a Full-Stack Engineer.
            </p>
          </div>
        </div>
        <div className='col-span-1'>
          <div>
            <h2 className='mb-7 text-2xl'>Ambitions</h2>
          </div>
        </div>
        <div className='col-span-1 pb-7 md:col-span-2 '>
          <div>
            <p className='text-2xl'>
              I am currently transitioning from Frontend Web Development to Frontend Software Engineering. The goal is to get hired!
            </p>
          </div>
        </div>
        <div className='col-span-1'>
          <div>
            <h2 className='mb-7 text-2xl	'>Abilities</h2>
          </div>
        </div>
        <div className='col-span-1 pb-7 md:col-span-2 '>
          <div>
            <p className='text-2xl'>
              JavaScript | React | SQL | Nextjs | Heroku |
              Vercel | Python | NLTK | Figma | Agile  | Webpack |
              Babel | Jest (in progress..) |
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
