import { useState } from 'react'
import Button from '../../../utils/Button'
import Modal from '../../../utils/Modal'

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className='w-screen p-6 bg-green-100 lg:px-24 lg:py-8 lg:flex lg:items-center lg:justify-between'>
            
            {/* Auth Buttons */}
            <div className='flex items-center justify-between'>     
                <Button
                    title='add item'
                    mainClassName='bg-red-800 hover:bg-red-700'
                    titleClassName='text-xl text-white'
                    onClick={() => setShow(true)}
                />
            </div>
            {/* Modal */}
            {show && (
                <Modal onClose={() => setShow(false)} maxWidth="max-w-xl" padding="p-6">
                <h2 className="text-lg font-bold mb-4">Add Item</h2>
                <form className="flex flex-col gap-2">
                    <input type="text" placeholder="Item Name" className="border p-2 rounded" />
                    <input type="number" placeholder="Price" className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                    Submit
                    </button>
                </form>
                </Modal>
            )}
        </nav>
    )
}

export default Navbar