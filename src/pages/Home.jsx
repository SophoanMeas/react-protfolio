import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import MobileSideBar from '../components/MobileSideBar/MobileSideBar'
import Header from '../components/Navbar/Header'
import Hero from '../components/Hero/Hero'
import ProjectCard from '../components/Profile/ProjectCards'
import Footer from '../components/Footer/Footer'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import styled
 from 'styled-components'
export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

  return (
  <>
  <MobileSideBar isOpen={isOpen} toggleMenu={toggleMenu}/>
  <Header toggleMenu={toggleMenu}/>
  <Routes>
  <Route path="/react-portfolio/" element={<Hero/>}/>
  <Route path="/react-portfolio/about" element={<AboutPage/>}/>
  <Route path="/react-portfolio/profile" element={<ProjectCard/>}/>
  <Route path="/react-portfolio/contact" element={<ContactPage/>}/>
  <Route path="/react-portfolio/resume" element={<ResumePage/>}/>
  </Routes>
  <ProjectContainer/>
  <Footer/>
  </>
  )
}

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
    /* height: 30vh; */
  `