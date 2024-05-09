import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <p>
            Ready to elevate your online presence? Let's collaborate to bring
            your vision to life! Whether you're looking to create a stunning
            website from scratch, revamp an existing one, or explore innovative
            digital solutions, I'm here to help. Get in touch today to discuss
            your project and let's turn your ideas into reality
          </p>

          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subjected"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>

                <li>
                  <input type="submit" className="flat-btn" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
