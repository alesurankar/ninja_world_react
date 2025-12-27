import { Ninja } from '../assets/images/images'
import { QuoteIcon } from '../assets/icons/icons'

const Fetch = () => {
    return (
        <section className='w-screen bg-gray-400 px-8 py-20 lg:p-24 flex flex-col lg:flex-row items-center justify-center'>
            <div className='shrink-0 w-64 lg:w-80'>
                <img
                    className='w-full h-full'
                    src={Ninja}
                    alt='Ninja'
                />
            </div>
            <div className='w-full px-5 mt-16 lg:mt-0 lg:w-1/3 lg:ml-14'>
                <div className='shrink-0 w-14'>
                    <img
                        className='w-full h-full'
                        src={QuoteIcon}
                        alt='Quote'
                    />
                </div>
                <p className='text-lg font-bold text-textColor mt-5 mb-10'>
                    This is a ninja page.
                </p>
                <p className='text-lg text-textColor opacity-50'>Anonym ninja</p>
            </div>
        </section>
    )
}

export default Fetch