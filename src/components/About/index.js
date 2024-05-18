import React,{useState,useEffect} from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
  }, []);


  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray = {['A', 'B', 'O', 'U', 'T',' ','M','E']}
            idx={15}
            />
        </h1>
        <p>I'm a passionate full-stack developer with expertise in building dynamic web applications. I leverage React.js to craft engaging user interfaces and Django to create powerful backends. My problem-solving skills ensure I can tackle challenges head-on, and my drive for innovation fuels my desire to develop cutting-edge products that make a real difference.</p>
        <p>Whether you're looking for a developer to build a user-friendly front-end or a robust back-end system, I'm confident I can bring your vision to life. Explore my portfolio to see a glimpse of my work and how I can elevate your next project.</p>
        <p>Beyond coding, I'm a well-rounded individual with a passion for lifelong learning. I enjoy sharpening my mind with strategic games like chess and badminton. When I'm not actively coding, you might find me exploring new places, indulging in creative problem-solving, or staying up-to-date on the latest advancements in technology.</p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#DD0031" />
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About;