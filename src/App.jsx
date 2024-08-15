import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ProjectListing from './components/ProjectListing'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Routes>
            <Route path='/'
              element={
                <>
                  <Header />
                  <Home />
                  <About />
                  <ProjectListing />
                  <Contact />
                  <Footer />
                </>
              } />
            <Route strict path='/project/:pid' element={<ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App