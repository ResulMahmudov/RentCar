import React from 'react'

const Card = ({ title, description, buttonText, image, background, BtnBg, left }) => {
  return (
    <div className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-5 
    md:items-start
    md:justify-start
    mb-4 h-full
    ${background} 
     min-w-full 
     md:min-w-0 
     md:w-[640px] 
     p-6
     rounded-xl
     sm:items-start`
    }>

      <div className=' flex flex-col gap-5 items-start' >
        <div className='sm:w-[284px] flex flex-col items-start justify-start gap-4'>
          <h2 className="text-[16px]  md:w-[284px] font-bold md:text-[32px] sm:text-[32px] text-[#FFFFFF]">{title}</h2>
          <p className=" text-[12px] w-[216px] md:w-[284px] md:text-[16px] sm:text-[16px] text-[#FFFFFF]">{description}</p>
        </div>
        <button className={`${BtnBg} text-white font-semibold py-3 px-6 rounded-md`}>
          {buttonText}
        </button>
      </div>
      <div className={` ${left}   w-[196px] md:w-[406px] h-[70px] md:h-[116px] sm:w-[406px] sm:h-[116px] `}>
        <img src={image} />
      </div>
    </div>
  );
};


export default Card