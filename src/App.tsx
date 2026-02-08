import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faDocker, faGitAlt, faGithub, faGitlab, faGolang, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faArrowDown, faArrowRight, faCode, faDatabase, faHandshake, faHSquare, faList,faSearch} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {Routes, Route, useNavigate, useLocation} from "react-router"
import Home from './views/Home'
import DevHttp from './views/DevHttp'
import SpaceSimulation from './views/SpaceSimulation'
import PiggyHttp from './views/PiggyHttp'
import PathFinder from './views/PathFinder'
import ProjectLog from './components/ProjectLog'

function ShowProjects() : JSX.Element{
  const [showProjects, setShowProjects] = useState(true)
  const navigator = useNavigate()
  const location = useLocation()
  const toggleShowProjects = () => {
    setShowProjects(!showProjects)
  }
  const goTo = (path : string) => {
    if(location.pathname !== path){
      navigator(path)
    }
  }
  return (
    <div className='projects-directories'>
      <p className={location.pathname === "/" ? "project selected" : "project"} onClick={() => goTo("/")}>
        <FontAwesomeIcon icon={faHandshake}/> Home
      </p>
      <p onClick={toggleShowProjects} className='show-projects'>
        {showProjects ?  <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowRight}/>}
        <FontAwesomeIcon icon={faList}/> Projects
      </p>
      {
        showProjects
        ? <React.Fragment>
            <p className={location.pathname === "/devhttp" ? "project selected" : "project"} onClick={() => goTo("/devhttp")}>
              <FontAwesomeIcon icon={faCode}/> devhttp
            </p>
            <p className={location.pathname === "/space-simulation" ? "project selected" : "project"} onClick={() => goTo("/space-simulation")}>
              <FontAwesomeIcon icon={faCode}/> space-simulation
            </p>
            <p className={location.pathname === "/piggyhttp" ? "project selected" : "project"} onClick={() => goTo("/piggyhttp")}>
              <FontAwesomeIcon icon={faCode}/> piggyhttp
            </p>
            <p className={location.pathname === "/pathfinder" ? "project selected" : "project"} onClick={() => goTo("/pathfinder")}>
              <FontAwesomeIcon icon={faCode}/> pathfinder
            </p>
          </React.Fragment>
        : null
      }
    </div>
  )
}

function App() : JSX.Element {
  const [srcExpanded, setSrcExpanded] = useState(false)
  const [showLogs, setShowLogs] = useState(true)
  const location = useLocation()
  const toggleSrc = () => {
    setSrcExpanded(!srcExpanded)
  }
  return(
    <div id='app'>

      <header id='app-header'>
          Fabian Jesus Rivas Software Engineer
      </header>

      <div id='app-menu'>
        <div id='my-links'>
            <p>FJR</p>
            <a href='https://www.linkedin.com/in/fabian-jesus-rivas' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='large-icon'/>
            </a>
            <a href='https://www.github.com/mrpiggy97' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='large-icon'/>
            </a>
            <a href='https://www.gitlab.com/frivas6' target='_blank'>
              <FontAwesomeIcon icon={faGitlab} className='large-icon'/>
            </a>
            <a href='https://app.joinhandshake.com/profiles/fabian-jesus-rivas' target='_blank'>
              <FontAwesomeIcon icon={faHSquare} className='large-icon'/>
            </a>
            <a href='https://www.leetcode.com/mrpiggy97' target='_blank'>
              <FontAwesomeIcon icon={faCode} className='large-icon'/>
            </a>
            <a>
              <FontAwesomeIcon icon={faGitAlt} className='large-icon'onClick={() => setShowLogs(!showLogs)}/>
            </a>
        </div>
        <div id='project-navigation'>
          <div className='explorer'>
            <p>EXPLORER <FontAwesomeIcon icon={faSearch}/></p>
          </div>
          <div className='navigation-header'>
            <p>MY PROJECTS AND PRESENTATION</p>
          </div>
          <div className='projects'>
            <div className='projects-source' onClick={toggleSrc}>
                  {srcExpanded ? <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowRight}/>}
                  <FontAwesomeIcon icon={faList}/>
                  <span>src</span>
            </div>
            {srcExpanded ? <ShowProjects/> : null}
            {showLogs ? <ProjectLog/> : null}
          </div>
        </div>
      </div>

      <div id='views'>
        <div id='views-navigator'>
          <div id='current-page'>
            <span><FontAwesomeIcon icon={faCode}/>{location.pathname !== "/" ? location.pathname.substring(1) : "Home"}</span>
          </div>
        </div>
        <div id='routes'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/devhttp' element={<DevHttp/>}/>
            <Route path='/space-simulation' element={<SpaceSimulation/>}/>
            <Route path='/piggyhttp' element={<PiggyHttp/>} />
            <Route path='/pathfinder' element={<PathFinder/>} />
          </Routes>          
        </div>
      </div>

      <footer id='app-footer'>
        <small>Contact me at fabyjesusrivas10@gmail.com</small>
      </footer>
    </div>
  )
}

export default App
