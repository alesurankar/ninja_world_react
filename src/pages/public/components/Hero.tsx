import Button from '../../../utils/Button'
import { HeroBg } from '../../../assets/images/images'

const Hero = () => {
    return (
        <section className="relative w-screen min-h-screen px-8 py-20 lg:p-24
                 flex items-center justify-center lg:justify-between
                 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroBg})` }}>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Section - Left side on desktop, top on mobile */}
            <div className="relative z-10 flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl text-white font-semibold">
                    NinjaStrike
                </h1>
                
                <p className="text-lg text-white/80 py-10">
                    This is a sample landing page. Build using React and Tailwind CSS.
                </p>
                
                <Button
                    title='Get Started'
                    mainClassName='bg-red-500 hover:bg-red-600'
                />
            </div>
        </section>
    )
}

export default Hero