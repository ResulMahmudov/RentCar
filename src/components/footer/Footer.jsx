import React from 'react'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='w-full max-w-[1300px] mx-auto my-0'>
        <div className="flex flex-col gap-[72px]">

          <div className=" flex flex-col justify-between items-start mt-20 ml-5  md:flex-row md:ml-0">
            <div className='flex flex-col gap-4 mb-8'>
              <h1 className='text-[#3563E9] text-3xl'>MORENT</h1>
              <p className='w-[280px] text-[16px]'>Our vision is to provide
                convenience and help increase your sales business.
              </p>
            </div>
            <div className='flex flex-wrap items-start justify-start md:justify-center md:flex-nowrap  gap-[60px]'>
              <FooterList
                title="About"
                items={["How it works","Featured","Partnership","Bussines Relation"]}
              />
               <FooterList
                title="Community"
                items={["Events","Blog","Podcast","Invite a friend"]}
              />
               <FooterList
                title="Socials"
                items={["Discord","Instagram","Twitter","Facebook"]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-9 ml-4">
            <div className="w-full h-[1px] opacity-20 bg-gray-500 hidden md:block "></div>
            <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-start">
              <div>
                <h2 className='text-[12px] md:text-[16px] font-semibold'>©2022 MORENT. All rights reserved</h2>
              </div>
              <div>
                <ul className="flex gap-32 md:gap-16">
                  <li><a href="#"  className='text-[12px] md:text-[16px] font-semibold'>Privacy & Policy</a></li>
                  <li><a href="#"  className='text-[12px] md:text-[16px] font-semibold'>Terms & Condition</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer