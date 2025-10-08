import mark from '../../assets/mark.png';
import Description from './Description';


const Delivery = ({ title,width }) => {
  return (

    <div className={` bg-white  flex flex-col rounded-xl p-4 md:px-12 md:py-[26px]  ${width} gap-4`}>
      <div className='flex items-center gap-2'>
        <img src={mark} />
        <h1>{title}</h1>
      </div>

      <div className='flex  gap-10 '>

        <Description
          text="Location"
          description="Semarang"
        />
        <Description
          text="Date"
          description="21 July 2022"
        />

        <Description
          text="Time"
          description="01.00"
        />

      </div>
    </div>



  )
}

export default Delivery