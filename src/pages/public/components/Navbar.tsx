import { useState } from 'react'
import { Logo1 } from '../../../assets/images/images'
import Button from '../../../utils/Button'
import AuthModal from './AuthModal'

const Navbar = () => {
    const [show, setShow] = useState(false);
    
    return (
        <nav className='w-screen p-6 bg-green-100 lg:px-24 lg:py-8 lg:flex lg:items-center lg:justify-between'>
            {/* Logo Section */}
            <div className='shrink-0 w-40 cursor-pointer'>
                <img
                    className='w-full h-full'
                    src={Logo1}
                    alt="Logo"
                />
            </div>
            
            {/* Auth Buttons */}
            <div className='flex items-center justify-between'>
                
                <Button
                    title='Log in'
                    mainClassName='bg-[#7c2923] hover:bg-[#d5453a]'
                    titleClassName='text-3xl text-white font-bold uppercase'
                    onClick={() => setShow(true)}
                />
            </div>
            {/* Modal */}
            {show && <AuthModal onClose={() => setShow(false)} />}
        </nav>
    )
}

export default Navbar