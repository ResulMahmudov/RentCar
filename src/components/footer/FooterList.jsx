import React from 'react'

const FooterList = ({ title, items = [] }) => {
  return (
    <div className='flex flex-col items-start justify-center gap-6'>
      <h1 className="font-bold text-[18px] mb-2">{title}</h1>
      <ul className="flex flex-col gap-5">
        {items.map((item, index) => (
          <li key={index} className="text-gray-500 cursor-pointe">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList