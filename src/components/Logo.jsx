import React from 'react'
// import bloglogo from '../assets/bloglogo.jpg'


function Logo(width = '100px') {
    return (
        <div>
            {/* <img width={"50px"} src = {bloglogo} alt='Logo'/> */}
            <a className='text-[#131313] font-sans text-[26px] transition-all duration-[linear] delay-[0.3s] inline-block py-[0.3125rem] mr-4 leading-[inherit] whitespace-nowrap no-underline bg-transparent m-0 p-0 box-border text-left font-[bold] hover:text-orange-500'>Funpanda</a>
        </div>
    )
}

export default Logo
