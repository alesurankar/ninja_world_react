import Button from '../../../utils/Button'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <Button
                title='add item'
                mainClassName='bg-red-800 hover:bg-red-700'
                titleClassName='text-xl text-white'
            />
        </div>
    )
}

export default Navbar