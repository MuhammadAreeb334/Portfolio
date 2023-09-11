import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/Logo-A.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'e', 'e', 'b']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12 `}>i,</span>
                    <br />
                    <span className={`${letterClass} _13 `}>I</span>
                    <span className={`${letterClass} _14 `}>'m,</span>

                    <img src={LogoA} alt='frontend developer reactJS javaScript' />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={16} 
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={jobArray} 
                        idx={21} 
                    />
                </h1>
                <h2>Frontend Developer / ReactJS Developer / JavaScript</h2>
                <Link to= "/contact" className= "flat-btn">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home