import { useState } from 'react';
import Swap from '../assets/Swap.png';
import CarBox from '../components/carBox/CarBox';
import { cars } from '../components/carBox/DataCarBox';
import Filter from '../components/categoryFilter/Filter';
import Delivery from '../components/delivery/Delivery';
import { Slider } from 'antd';
const Category = () => {
  const TwoselectedIds = [1, 2, 3, 4, 5, 6, 7, 8, 12];
  const TwovisibleCars = cars.filter(car => TwoselectedIds.includes(car.id));
  const [maxPrice, setMaxPrice] = useState(100);
  return (
    <div className='flex'>

      <div className='bg-white  h-[1651px] w-[360px]  flex-col gap-14 px-9 hidden  md:flex'>

        <div className='flex flex-col gap-7'>
          <h3 className='text-[#90A3BF] text-xs'>Type</h3>
          <div className=' flex flex-col gap-3'>
            <Filter
              type="Sport"
              number="(10)"
            />
            <Filter
              type="SUV"
              number="(12)"
            />
            <Filter
              type="MPV"
              number="(16)"
            />
            <Filter
              type="Sedan"
              number="(20)"
            />
            <Filter
              type="Coupe"
              number="(14)"
            />
            <Filter
              type="Hatchback"
              number="(14)"
            />
          </div>
        </div>
        <div className='flex flex-col gap-7'>
          <h3 className='text-[#90A3BF] text-xs'>CAPACITY</h3>
          <div className=' flex flex-col gap-3'>
            <Filter
              type="2 Person"
              number="(10)"
            />
            <Filter
              type="4 Person"
              number="(14)"
            />
            <Filter
              type="6 Person "
              number="(12)"
            />
            <Filter type="8 or More"
              number="(16)"
            />
          </div>
        </div>
        <div className='w-[250px]'>
          <p className='text-[#90A3BF] text-xs'>Price</p>

          {/* Slider */}
          <Slider
            min={0}
            max={100}
            value={maxPrice}
            onChange={setMaxPrice}
            styles={{
              track: {
                backgroundColor: "#3563E9",
                height: 6,
              },
              rail: {
                backgroundColor: "#C3D4E9",
                height: 6,
              },

            }}
          />
          <p className='text-[#596780] text-[16px] '>
            Max. ${maxPrice.toFixed(2)}
          </p>
        </div>
      </div>


      <div className='w-[90%]  max-w-[1340px]  mx-auto my-0' >

        <div className="mt-8 flex  gap-10 flex-col md:flex-row justify-center items-center  md:gap-11 relative">
          {/* Pick-up */}
          <Delivery
            width="  w-[327px] md:w-[486px] "
            title="Pick-up"
          />

          {/* Swap Button */}
          <button
            className="w-[60px] h-[60px] flex items-center justify-center bg-[#3563E9] rounded-xl
                absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
          >
            <img src={Swap} alt="swap" />
          </button>

          {/* Drop-off */}
          <Delivery
            title="Drop-off"
            width="  w-[327px] md:w-[486px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-5 mb-5">

          <div className="flex items-center justify-center gap-12 flex-wrap mt-5">

            {TwovisibleCars.map(car => (
              <CarBox key={car.id} {...car} />
            ))}

          </div>

          <div className="w-[156px] h-[44px] bg-[#3563E9] flex items-center justify-center rounded">
            <button className="text-white">Show more car</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category