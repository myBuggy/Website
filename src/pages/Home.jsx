import img1 from '../assets/asset 4.png'
import img2 from '../assets/asset 2.png'
import img3 from '../assets/asset 3.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div id="home">
            <div
                id="hero"
                className="bg-gray-100 flex items-center justify-center py-10"
            >
                <div className='flex flex-col-reverse h-fit items-center px-14 lg:flex-row lg:justify-around'>
                    <div className='flex flex-col items-center lg:items-start gap-5 lg:w-1/2'>
                        <div className='text-3xl font-bold lg:text-4xl'>
                            <span>Pay CASH, CARD, Wallet</span><br />
                            <span>Hours of Operations:</span>
                        </div>
                        <div className=' text-center'>Mon - Sunday 9 AM to 11:30 PM</div>
                        <div className=' leading-relaxed lg:leading-loose'>New Mobile App, Registered, reliable & affordable Ride Hailing Ride Share transportation service, provides safe and efficient travel to Lehigh County Customers. Our goal is to provide a sustainable and convenient transportation option for everyone, with guaranteed savings from 1.50 $ compared to the market up to 20-30$ based on your ride</div>
                        <div className='flex gap-4 flex-col md:flex-row' >
                            <div className='p-4 rounded-md shadow-md hover:shadow-xl bg-gray-50'>  
                                <div className='text-2xl font-bold'>Download Rider App</div>
                                <div className='flex mt-4'>
                                    <Link to="https://apps.apple.com/us/app/my-buggy/id6505065765" className="lg:w-5/12"><img src={img2} alt="play-store" /></Link>
                                    <Link to="https://play.google.com/store/apps/details?id=my.buggy.user&hl=en-US&ah=vm3fRyTPOq3Wt5CXekgTKRUrjF0" className="lg:w-5/12"><img src={img3} alt="apple-store" /></Link>
                                </div>
                            </div>
                            <div className='p-4 rounded-md shadow-md hover:shadow-xl bg-gray-50'> 
                                <div className='text-2xl font-bold'>Download Driver App</div>
                                <div className='flex mt-4'>
                                    <Link to="https://apps.apple.com/us/app/my-buggy-driver/id6505066806" className="lg:w-5/12"><img src={img2} alt="play-store" /></Link>
                                    <Link to="https://play.google.com/store/apps/details?id=my.buggy.drivers" className="lg:w-5/12"><img src={img3} alt="apple-store" /></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='h-fit'>
                        <img src={img1} alt="" className="w-fit lg:w-10/12" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;