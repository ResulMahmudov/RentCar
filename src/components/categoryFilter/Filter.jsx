import React from 'react'

const Filter = ({type,number}) => {
  return (
    <div className='flex items-center gap-3'>
        <input type='checkbox' />
        <h3 className='text-sm text-[#596780]'>{type}</h3>
        <span className='text-[#90A3BF] text-sm'>{number}</span>
      </div>
  )
}

export default Filter