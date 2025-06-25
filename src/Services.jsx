import fire from './assets/fire.png';
import setting from './assets/settings.png';
import enterpruner from './assets/enterpruner.png';
import './index.css';
export default function Services(){
    
    return(
        <>
        <div className='ml-5 mt-20 mb-14 '>       
        <p className="text-red-600 font-bold text-xl">Our Services</p>
                <h1 className="font-bold text-2xl mt-2">A wide Range Of Our Services.</h1>
        </div>
        <div  className='grid md:grid-cols-3 grid-cols-1 gap-2 w-full place-items-center'>
            {detials.map((d)=>(
                <div id='rotate' className='md:mt-4 hover:text-white bg-[#0000000a] hover:bg-gradient-to-r from-pink-400 to-orange-400 p-3 rounded-lg  border-2 w-[260px] flex flex-col justify-center items-center overflow-x-hidden'>
                    <div className="mt-2 mb-2 rounded-full w-[60px] h-[60px] bg-sky-950 flex justify-center items-center">
                        <img id='image' className=' w-9' src={d.img} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold mb-2'>{d.title}</h1>
                    </div>
                    <div className='text-center mb-2'>{d.contant}</div>
                    <button className='hover:bg-pink-200 rounded-2xl text-black bg-white  px-4 py-2 mt-2 font-bold'>READ NOW</button>
                </div>
            ))}
        </div>
        </>
    );
}
const detials = [
    {
        img:fire,
        title: `Project Management`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    },
    {
        img:setting,
        title: `Estimating`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    },
    {
        img:enterpruner,
        title: `Entrepreneurship`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    },
    {
        img:fire,
        title: `Customization`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    },
    {
        img:setting,
        title: `Collabrative Partnership`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    },
    {
        img:enterpruner,
        title: `Sustainability`,
        contant: `Build strong relationship with relable subcontractors and
            supplyers to ensure a study flow.`,
    }
]