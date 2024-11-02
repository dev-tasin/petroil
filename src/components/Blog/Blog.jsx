import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import { FaChevronRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='bg-[#F0F0F0] py-[110px]'>
        <Container>
            <div className='flex justify-between'>
                <div className='w-[30%] bg-blog_one bg-no-repeat bg-center bg-cover px-[45px] pt-[75px] pb-[55px]'>
                    <h3 className='w-[249px] text-[24px] font-primary font-bold text-white mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <button className='bg-[rgba(255,255,255,0.5)] text-[12px] text-white font-primary font-semibold py-[10px] px-[23px] border-2 border-transparent hover:border-white duration-500'>
                        READ MORE
                    </button>
                </div>
                <div className='w-[30%] bg-blog_two bg-no-repeat bg-center bg-cover px-[45px] pt-[75px] pb-[55px]'>
                <h3 className='w-[249px] text-[24px] font-primary font-bold text-white mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <button className='bg-[rgba(255,255,255,0.5)] text-[12px] text-white font-primary font-semibold py-[10px] px-[23px] border-2 border-transparent hover:border-white duration-500'>
                        READ MORE
                    </button>
                </div>
                <div className='relative w-[30%] bg-blog_three bg-no-repeat bg-center bg-cover px-[45px] pt-[75px] pb-[55px]'>
                <h3 className='w-[249px] text-[24px] font-primary font-bold text-white mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <button className='bg-[rgba(255,255,255,0.5)] text-[12px] text-white font-primary font-semibold py-[10px] px-[23px] border-2 border-transparent hover:border-white duration-500'>
                        READ MORE
                    </button>
                    <div className='absolute  -bottom-[40px] right-0'>
                        <a href="#" className='flex items-center text-base font-primary font-bold'>
                            MORE FROM THE BLOG <FaChevronRight/>
                        </a>
                    </div>
                </div>
            </div>
       </Container>
    </div>
  )
}

export default Blog