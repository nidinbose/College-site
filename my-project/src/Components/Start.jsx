import React from "react"
import { AiOutlineSearch } from 'react-icons/ai'

const Start = () => {
  return (
    <section className='w-full bg-white py-24 p-4'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px] gap-5'>
            <div className='flex flex-col justify-start gap-4'>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1D3D9] via-[#42A7D5] to-[#42A7D5] font-amsterdam">
  Cambridge College of Engineering
</p>

            <p className="py-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1D3D9] via-[#42A7D5] to-[#42A7D5] font-amsterdam tracking-wide">
  START TO SUCCESS
</p>
                <h1 className='md:leading-[42px] py-2 md:text-3xl text-lg font-semibold hover:text-emerald-300'>
                    Access to over <span className='text-[#208486]'>1000</span> courses from over <span className='text-[#208486]'>200</span> professional instructors & institutions
                </h1>
                <p className='py-2 text-lg text-[#208486] font-semibold'>Various versions have evolved over the years...</p>
                <form className='input-box-shadow flex justify-content-between items-center bg-transparent gap-2'>
                    <input type="text" className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500" placeholder='search for courses here'/>
                    <button>
                        <AiOutlineSearch
                            size={30}
                            className='icon'
                            style={{ color:'#000' }}
                        />
                    </button>
                </form>
            </div>
            <img src="https://admissiondetails.in/wp-content/uploads/2021/12/SJB-Institute-of-Technology.jpeg" alt="hero" className='md:order-last order-first rounded-lg'/>
        </div>
    </section>
  )
}

export default Start
