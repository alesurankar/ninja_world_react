import Button from './Button'
import { HeroBg } from '../assets/images/images'

const Hero = () => {
    return (
        <section className='w-screen bg-green-200 px-8 py-20 lg:p-24 text-center flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
            {/* Content Section - Left side on desktop, top on mobile */}
            <div className='flex flex-col items-center justify-center lg:items-start lg:justify-normal lg:w-1/2'>
                <h1 className='text-5xl lg:text-7xl text-textColor font-semibold'>{`NinjaStrike`}</h1>
                
                <p className='text-lg text-textColor opacity-50 py-10'>
                    This is a sample landing page. Build using React and Tailwind CSS.
                </p>
                
                <Button
                    title='Get Started'
                    mainClassName='bg-red-500 hover:bg-red-600'
                />
            </div>
            
            {/* Hero Image Section - Right side on desktop, bottom on mobile */}
            <div className='shrink-0 w-full mt-10 lg:mt-0 lg:w-1/2 lg:h-[460px]'>
                <img
                    className='w-full h-full'
                    src={HeroBg}
                    alt='Hero'
                />
            </div>
        </section>
    )
}

export default Hero