
export default function Header(){
    return(
        <>
        <div className=" w-[100%] flex justify-center items-center text-[white] bg-[url('./assets/constructionH.jpeg')]  h-[600px] bg-cover bg-center  bg-no-repeat ">
            <div className=" mx-auto w-[90%]  flex justify-center items-center flex-col text-center" >
                <h1 className="font-bold md:text-5xl text-4xl">Customized Homes With </h1>
                <h1 className="font-bold md:text-5xl text-4xl">Timeless Designs.</h1><br />
                <p className="md:text-3xl text-xl" >In the context of constructions, "Building your Vision 
                    refers to taking architectural design concept and psycally
                    constructing a building or property that matches that vision.
                </p>
            </div>
        </div>
        </>
    );
}