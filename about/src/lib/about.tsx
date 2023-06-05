import {useState} from "react"
import {Navigate} from "react-router-dom"

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  const  [user, setUser] = useState('john')

  if (user=="") {
    return <Navigate to="/" replace={true} />
  }
  return (
    <>
      <h2>About</h2>
      About
      <button onClick={() => setUser("")}>Logout</button>
    </>
  );
}

export default About;
