import { BlackNinja } from '../../assets/images/images'
import { QuoteIcon } from '../../assets/icons/icons'

interface QuoteBlockProps {
  image?: string;
  text: string;
  author: string;
}

const QuoteBlock = ({image = BlackNinja,text,author}: QuoteBlockProps) => {
  return (
        <section className='relative w-screen bg-gray-400 p-6 lg:p-12 flex flex-col lg:flex-row border-t border-b border-black'> 
            <div className="shrink-0 w-24 lg:w-40 lg:-mt-6">
                <img src={image} alt='ninja' className='w-full h-full'/>
            </div>
            <div>
                <div className="shrink-0 lg:mx-6 w-8 lg:w-14">
                    <img src={QuoteIcon} alt='Quote' className='w-full h-full'/>
                </div>
                <div className="flex-1 min-w-0 mt-1 lg:-mt-10 lg:ml-24">
                    <p className="text-md lg:text-lg text-black break-words">{text}</p>
                    <p className="mt-2 lg:mr-12 text-right text-lg lg:text-xl text-black font-bold">{author}</p>
                </div>
            </div>
        </section>     
    )
}

export default QuoteBlock