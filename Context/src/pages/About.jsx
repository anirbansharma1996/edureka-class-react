import React,{useContext} from 'react'
import { TextContext } from '../context/textContext'

const About = () => {
 const text = useContext(TextContext)

  return (
    <div>About
      <p>{text}</p>
    </div>
  )
}

export default About