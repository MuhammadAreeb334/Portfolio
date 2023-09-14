import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
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
        </div>
    )
}

export default About