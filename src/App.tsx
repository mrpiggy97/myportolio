import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faConnectdevelop, faDocker, faGithub, faGitlab, faGolang, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faCode, faDatabase, faH, faHandshake, faHSquare, faLink, faNetworkWired, faW } from '@fortawesome/free-solid-svg-icons'
function App() : JSX.Element {
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
        </div>
        <div id='project-navigation'>

        </div>
      </div>

      <div id='views'>
        views go here
      </div>

      <footer id='app-footer'>
        <FontAwesomeIcon icon={faGolang}/>
        <FontAwesomeIcon icon={faPython}/>
        <FontAwesomeIcon icon={faJs}/>
        <small>Ts</small>
        <FontAwesomeIcon icon={faReact}/>
        <FontAwesomeIcon icon={faAngular}/>
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faGitlab} />
        <FontAwesomeIcon icon={faDocker}/>
        <FontAwesomeIcon icon={faDatabase}/>
      </footer>
    </div>
  )
}

export default App
