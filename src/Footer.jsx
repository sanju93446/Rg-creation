export default function Footer(){
    return(
        <>
            <div>
                <hr className="bg-sky-900  w-full"></hr>
                <footer className=" w-full p-3 bg-sky-950">
                    <div className="text-white flex justify-around  "  > 
                        
                        <div >
                        <h1 className="font-serif text-2xl underline">Address</h1>
                        <p className="">
                        Villupuram,<br />
                            TamilNadu,<br />
                            605601.
                        </p>
                            
                        </div>
                        <div>
                            <h1 className="font-serif text-2xl underline">Contact</h1>
                            <p>
                               <a href="https://api.whatsapp.com/send?phone=+919786103747&text=Hi">Whatsapp</a>  <br />
                                9786103747
                            </p>
                        </div>
                    </div> 
                </footer>
            </div>
        </>
    );
}