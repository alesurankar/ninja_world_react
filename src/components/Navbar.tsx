import { useState } from 'react';
import { Logo1 } from '../assets/images/images'
import Button from './Button'
import AuthForm from './AuthForm'
import AuthModal from './AuthModal';
//import axios from 'axios'; //////////////// import axios for HTTP requests

const Navbar = () => {
    const [showAuth, setShowAuth] = useState(false); // trak if AcuthForm is visible
    const [showAuthModal, setShowAuthModal] = useState(false); // track if AuthModal is visible

    // const handleRunTestDB = async () => { /////////// function to handle TestDB run
    //     try {
    //         const response = await axios.get('http://localhost:4000/api/v1/run-test-db');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Error running TestDB:', error);
    //     }
    // };

    return (
        <nav className='w-screen p-8 bg-green-100 lg:px-24 lg:py-8 lg:flex lg:items-center lg:justify-between'>
            {/* Logo Section */}
            <div className='shrink-0 w-40 cursor-pointer'>
                <img
                    className='w-full h-full'
                    src={Logo1}
                    alt="Logo"
                />
            </div>
            
            {/* Auth Buttons */}
            <div className='hidden lg:flex items-center justify-between'>

                <Button
                    title='Sign up'
                    mainClassName='bg-red-500 hover:bg-red-600'
                    titleClassName='hover:text-whiteColor'
                    /*onClick={() => setShowAuth(true)}*/ // show AuthForm
                    onClick={() => setShowAuthModal(true)} // show AuthForm
                />
                
                <Button
                    title='Log in'
                    mainClassName='bg-gray-600 hover:bg-gray-800'
                    titleClassName='text-whiteColor'
                    /*onClick={() => setShowAuth(true)}*/ // show AuthForm
                    onClick={() => setShowAuthModal(true)} // show AuthForm
                    //onClick={handleRunTestDB} /////////// attach onClick handler to Log In button
                />
            </div>
            {/*{showAuth && <AuthForm />}*/}

            {/* Modal */}
            {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
        </nav>
    )
}

export default Navbar