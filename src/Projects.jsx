import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from './assets/projects/im1.jpg';
import im2 from './assets/projects/im2.jpg';
import im3 from './assets/projects/im3.jpg';
import im4 from './assets/projects/im4.jpg';

export default function Projects(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
            <div className='mt-20 ml-5 mb-6 '>       
                 <p className="text-red-600 font-bold text-xl ">Latest Projects</p>
                 <h1 className="font-bold text-2xl mt-2">The Purpose And Goals Of The Projects</h1>
             </div>
             <div className="bg-sky-950 w-full " >
             <div className="w-[80%] m-auto ">
                <Slider {...settings}>
                    {data.map((d)=>(
                        <div className="w-[100%] m-auto  ">
                            <div className="">
                            <img  className="md:w-[500px] md:h-[300px] rounded-lg mt-3 h-[200px] m-auto" src={d.img} alt="" />
                            </div>
                            
                            <div className="mt-4 mb-4 flex justify-center items-center">

                            <button className="bg-white px-4 py-1 rounded-lg font-semibold hover:bg-gray-700 hover:text-white ">Visit Now</button>
                            </div>
                            
                        </div>
                    ))}
                    </Slider>
                </div>
             </div>
        </>
    );
    
}
const data = [
{
    img:im1
},
{
    img:im2
},
{
    img:im3
},
{
    img:im4
}
];