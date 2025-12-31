/**
 * Component that renders the complete landing page
 * Organizes all sections from top to bottom
 */

import { useOutletContext } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'
import Partners from './components/Partners'
import Weapons from './components/Weapons'
import GetInTouch from './components/GetInTouch'
import Fetch from './components/Fetch'
import Footer from './components/Footer'

const LandingPage = () => {
  const { user, setUser } = useOutletContext<{
    user: any;
    setUser: (user: any) => void;
  }>();

  return (
    <div className='main'>
      <Navbar user={user} setUser={setUser} />

      <Hero user={user}/>

      <Partners />
    
      <Weapons />

      {!user && <GetInTouch />}
      
      {user && <Fetch user={user}/>}

      {!user && <Footer />}
    </div>
  )
}

export default LandingPage