import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')        

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return(
        <div className='conatiner about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a 3rd-year Computer Science student specializing in front-end web development. 
                    Proficient in HTML, CSS, JavaScript, React.js, Node.js, and MySQL. I create user-friendly
                    interfaces and functional websites, with a strong focus on front-end design. 
                    Skilled in MySQL for databases. Eager to contribute to dynamic web solutions and keep 
                    learning.
                </p>
                
                <p>
                    I'm looking for a role in established IT company as a Front-end Developer with the opportunity
                    to work with the latest technologies on challenging and diverse projects. 
                </p>
                
                <p> 
                    I am passionate about creating visually appealing and user-friendly websites. I am excited to 
                    leverage my skills to contribute to innovative projects, collaborate with cross-functional teams, 
                    and stay at the forefront of web development trends.
                </p>  
            </div>

            <div className='stage-cube-container'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About