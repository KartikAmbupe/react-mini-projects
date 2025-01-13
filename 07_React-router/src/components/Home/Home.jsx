import { Link } from 'react-router-dom'
import awla from '../../assets/Images/awla-juice.png'
import { FaShoppingCart } from "react-icons/fa";


function Home() {
    return (    
            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-3 py-2">
                    <div className="relative z-10 max-w-screen-xl px-4 pb-4 pt-4 sm:py-12 mx-auto sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="sm:w-1/2 flex justify-center sm:justify-start">
                                <img className="w-full h-full object-contain" src={awla} alt="image1" />
                            </div>
                            <div className="sm:w-1/2 max-w-xl sm:ml-auto text-center sm:text-right space-y-8 sm:mt-0 mt-8 sm:pl-8">
                                <h2 className="text-4xl font-bold sm:text-5xl">
                                    Awla Juice
                                    <span className="hidden sm:block text-xl">Refreshing Drink</span>
                                </h2>
                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                                    to="/"
                                >
                                    <FaShoppingCart className='mr-2'/> Order now
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
    );
}


export default Home
