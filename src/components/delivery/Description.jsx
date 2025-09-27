
import arrowDown from '../../assets/arrowDown.png';
const Description = ({ description, text }) => {
  return (

    <div className='flex flex-col items-start justify-start gap-2'>
      <h2 className='font-bold text-[16px]  '>{text}</h2>
      <button className='flex items-center gap-1  md:gap-2'>
        <p className='text-xs'>{description}</p>
        <img src={arrowDown} />
      </button>
    </div>


  )
}

export default Description