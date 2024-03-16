import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [education, setEducation] = useState([])
  const [work, setWork] = useState([])
  const [portfolio, setPortfolio] = useState([])

  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
    const educationResponse = await fetch('/education')
    const educationData = await educationResponse.json()
    setEducation(educationData)

    const workResponse = await fetch('/work')
    const workData = await workResponse.json()
    setWork(workData)

    const portfolioResponse = await fetch('/portfolio')
    const portfolioData = await portfolioResponse.json()
    setPortfolio(portfolioData);
    } catch (error) {
    console.error('There was an error in fetching the data from DRF: ', error);
    }
  };

  return (
    <>
      <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef} />

      <div className='md:h-screen pt-10' ref={homeRef}>
        <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>
          <h1 className='text-5xl mb-3'>Hello! My name is Shayna Gail.</h1>
          <p className='text-2xl text-cyan-900 ml-2'>I am a student at King's College London, studying MSci Computer Science.</p>
        </div>  

        <div className='flex md:flex-row flex-col space-between w-2/4 m-auto py-5 border rounded-sm px-3 shadow'>
        <img alt='profile' className='rounded-full w-64 h-64 mx-8' src='./shayna_pfp.png'/>
        <div>
        <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300'>Biography</h5>
        <p className='pt-3'>Second-year undergraduate student studying MSci Computer Science at King's College London, interested in the fields of AI, Software Development, Web Design and Cybersecurity.
          Committed, ambitious, professional and creative. Enjoys any computer-related tasks, editing, drawing (digital and traditional), animating, music, travelling, social media marketing/managing, online gaming, gastronomical adventures and filmmaking/content-creation.</p>
        </div>
       </div>
      </div>

      <div className='md:h-screen pt-10' ref={educationRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-2'>Education</h1>
          <p className='text-lg text-cyan-900'>Here is the education that I have received.</p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {education && education.map(e => (
                <div key={e.id} className='border rounded-sm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{e.school}, {e.degree}</h3>
                <h5 className='py-2'>{e.years}</h5>
                <p>{e.description}</p>
              </div>
              ))}
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={workRef} >
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>Work Experience</h1>
          <p className='text-lg text-cyan-900'>Here are my most relevant work experiences.</p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {work && work.map(w => (
            <div key={w.id} className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{w.company}, {w.title}</h3>
            <h5 className='py-2'>{w.years}</h5>
            <p>{w.description}</p>
          </div>  
        ))}
        </div>
      </div>


      <div className='md:h-screen pt-16' ref={portfolioRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>Portfolio</h1>
          <p className='text-lg text-cyan-900'>Take a look of some of my work! (Please be patient, there's nothing here yet :( In the meantime, take a look at my animation portfolio...))</p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {portfolio && portfolio.map(p => (
           <div key={p.id} className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{p.title}</h3>
            <a className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer' href={p.url}>View Project</a>
            <p>{p.description}</p>
            <iframe
            title='Readymag Site'
            src='https://readymag.website/4654021'
            width='100%'
            height='500px'  // Adjust height as needed
            style={{ border: 'none' }}
            allowFullScreen
          />
        ) : (
          // Image placeholder
          const imageURL = 'http://localhost:8000/uploads/your-image.jpg';

          <img
            src='./Untitled_Artwork_4_aD4oqF3.png'
            alt='This image cannot be displayed.'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
