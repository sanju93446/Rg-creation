import { useEffect } from 'react';

import engineerImg from './assets/engineer.png';
import teamImg from './assets/Team.png';
import rightImg from './assets/eng.jpg';

export default function About() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Optional: Automatically scroll to the top when this component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
            <div className='w-full mt-20 flex justify-center items-center flex-col md:flex-row mb-5'>
                <div className='w-[100%] px-[10px] md:hidden mb-4'>
                    <div>
                        <img className="w-full border-2 rounded-lg border-red-500" src={rightImg} alt="" />
                    </div>
                </div> 
                <div className='px-[10px] md:w-1/2 md:px-20'>
                    <p className="text-red-600 font-bold text-xl">About us</p>
                    <h1 className="font-bold text-2xl mt-2">Experienced & Quality Construction Providers.</h1>
                    <p className="mt-2 font-bold text-gray-500">In the context of Construction and Home, building your vision refers to taking architectural plans.</p>

                    <section className="mt-4 flex justify-start items-center gap-3">
                        <div className='w-12 h-12 md:w-14 md:h-14 rounded-[50%] border-2 border-red-500 flex justify-center items-center'>
                            <img className='w-8' src={engineerImg} alt="Engineer" />
                        </div>
                        <div>
                            <h1 className='font-bold text-xl'>Expert Engineer</h1> 
                            <p className='text-gray-500'>In the context of Construction and Home. <br /> Building your vision refers to taking architectural plans.</p>
                        </div>
                    </section>

                    <section className="mt-4 flex justify-start items-center gap-3">
                        <div className='w-12 h-12 rounded-[50%] border-2 border-red-500 flex justify-center items-center md:w-14 md:h-14'>
                            <img className='w-8' src={teamImg} alt="Team" />
                        </div>
                        <div>
                            <h1 className='font-bold text-xl'>Certified Engineers Team</h1> 
                            <p className='text-gray-500'>In the context of Construction and Home. <br /> Building your vision refers to taking architectural plans.</p>
                        </div>
                    </section>
                    <div className='justify-center items-center flex md:justify-start md:items-start'>
                        <button className='border-2 rounded-2xl px-2 py-1 font-medium mt-4 mb-4'>Discover Now</button>
                    </div>
                </div>
                <div className='md:w-1/2 px-20 md:flex hidden'>
                    <div>
                        <img className="md:w-full w-[400px] border-2 rounded-lg border-red-500" src={rightImg} alt="" />
                    </div>
                </div>
            </div>
            <button 
                onClick={scrollToTop} 
                className='font-bold text-xl text-white rounded-full fixed left-[85%] top-[80%] md:left-[90%] md:top-[90%] p-2 bg-gradient-to-r from-pink-600 to-orange-500'>
                UP
            </button>
        </>
    );
}
