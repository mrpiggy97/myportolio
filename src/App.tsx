import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faDocker, faGithub, faGitlab, faGolang, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
function App() : JSX.Element {
  return(
    <div id='app'>

      <header id='app-header'>
          Fabian Jesus Rivas Software Engineer
      </header>

      <div id='app-menu'>
        side menu
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
