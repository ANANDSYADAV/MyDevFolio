import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ProjectListing from './components/ProjectListing'
import ProjectDetails from './components/ProjectDetails'
import MyMoreDetails from './components/MyMoreDetails'
import ControlledAccordions from './components/NCC';
import ContactForm from './email/EmailService';

import Chatbot from './chatbot/ChatbotUI';

function App() {

  return (
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
                <ContactForm />
                <Chatbot />
                <Footer />
              </>
            } />
          <Route strict path='/projects/:pid' element={<ProjectDetails />} />
          <Route strict path='/more_details' element={<MyMoreDetails />} />
          <Route strict path='/more_details/ncc' element={<ControlledAccordions />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App