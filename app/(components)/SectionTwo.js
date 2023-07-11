import styles from './SectionTwo.module.css'

const SectionTwo = () => {
  return (
    <section
      id='page2'
      className={`min-h-full bg-black relative z-0 ${styles.page2} pb-7`}
    >
      <h2 className='text-center text-6xl md:text-9xl md:text-center uppercase py-6 md:py-10 mb-0 font-mono'>
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
              I am a full-stack developer who loves turning data into
              visualizations. Currently front-end leaning, with a focus on React
              and UX.
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
              My current goals are to upskill as a developer until I can teach
              myself data analytics. I dwell in JavaScript, and dabble in
              Python.
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
              JavaScript | React | MongoDB | PostgreSQL | Nextjs | Heroku |
              Vercel | Python | NLTK | Figma | Agile | SDLC | Kanban | Jira |
              People
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
