import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export default function Feedback  () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vrhjd8n', 'template_r2nobah', form.current, {
        publicKey: '1IPTHi2nxnRudukO8',
      })
      .then(
        () => {

          console.log('SUCCESS!');
          window.prompt('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='ml-5 mt-20 mb-14 '>       
        <p className="text-red-600 font-bold text-xl">Get In Touch With Us</p>
                <h1 className="font-bold text-2xl mt-2">How We Can Help You...</h1>
        </div>
        <form className=' mt-14 mb-14 border-sky-950 border-4 border-x-fuchsia-600 bg-[#e8e9ee56] flex flex-col justify-center items-center w-[98%] md:w-1/2 m-auto h-[300px] rounded-md' ref={form} onSubmit={sendEmail}>
      <label className='font-semibold'>Name</label>
      <input className='w-[300px] px-3 py-2 border-2 border-black rounded-md' name="to_name" />
      <label className='font-semibold'>Email</label>
      <input className='w-[300px] px-3 py-2 border-2 border-black rounded-md' type="email" name="from_name" />
      <label className='font-semibold'>Message</label>
      <textarea className='mb-2 w-[300px] px-3 py-2 border-2 border-black rounded-md' name="message" />
      <input className='text-white font-semibold hover:bg-sky-900 active:bg-sky-500 cursor-pointer bg-sky-950 px-3 py-2 w-[100px] rounded-lg' type="submit" value="Send" />
    </form>
    </>
    
  );
};