import React, { useState } from 'react'
import Filter from '../components/categoryFilter/Filter';
import { Rate, Slider } from 'antd';
import car from '../assets/nissangtr.png';
import Showroom from '../assets/CarShowroom.png';
import Steering from '../assets/steeringWheel.png';
import profilOne from '../assets/ProfilOne.png';
import profilTwo from '../assets/ProfilTwo.png';
import { HeartOutlined } from '@ant-design/icons';
import { cars } from '../components/carBox/DataCarBox';
import CarBox from '../components/carBox/CarBox';
const Details = () => {
  const [maxPrice, setMaxPrice] = useState(100);
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState(0)
  const images = [
    { id: 1, src: car, bg: "#3563E9" },
    { id: 2, src: Showroom, },
    { id: 3, src: Steering, },
  ];
  const selectedIds = [9, 10, 11];
  const visibleCars = cars.filter(car => selectedIds.includes(car.id));

  const TwoselectedIds = [1, 2, 3];
  const TwovisibleCars = cars.filter(car => TwoselectedIds.includes(car.id));
  return (
    <div className='flex '>

      <div className='bg-white w-[360px]  flex-col gap-14 px-9 hidden  md:flex'>

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



      <div className='w-[90%]  max-w-[1340px] mx-auto md:ml-14 mt-14 '>
        <div className='flex flex-col gap-8'>

          <div className='flex md:flex-row flex-col gap-8'>
            <div className='flex flex-col gap-6'>
              <div className='bg-[#3563E9] w-[327px] h-[232px] md:w-[492px] md:h-[360px] rounded-xl flex flex-col items-start gap-8'>
                <div className='flex flex-col gap-4 ml-6 mt-6 w-[240px] md:w-[372px]'>
                  <h1 className='text-[16px] md:text-[32px] text-white '>Sports car with the best design and acceleration</h1>
                  <p className='text-[12px] md:text-[16px] text-white '>Safety and comfort while driving a
                    futuristic and elegant sports car</p>
                </div>
                <img className='w-[190px] h-[60px] md:w-[380px] md:h-[120px] ml-16  md:ml-8' src={car} />
              </div>

              <div className="flex gap-5 md:gap-2">
                {images.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setSelected(img.id)}
                    className={`rounded-2xl p-[4px] cursor-pointer transition-all duration-200 
                   ${selected === img.id
                        ? "border-[2px] border-[#3563E9]"
                        : "border-[2px] border-transparent"}`}
                  >
                    <div className="w-[86px] h-[64px] md:w-[148px] md:h-[124px] flex items-center justify-center rounded-xl" style={{ backgroundColor: img.bg }}>
                      <img src={img.src} alt="" className="object-contain w-[96px]  h-[64px] md:w-[148px] md:h-[124px]  " />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className='bg-white p-6 rounded-xl w-[327px] h-[318px] md:w-[492px] md:h-[508px]'>
              <div className='flex  flex-col justify-between gap-8'>
                <div className='flex  justify-between'>

                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl md:text-3xl'>Nissan GT - R</h1>
                    <div className='flex gap-2'>
                      <Rate onChange={setValue} value={value} />
                      <p className='text-sm'>440+ Reviewer ({value})</p>
                    </div>
                  </div>

                  <div>
                    <HeartOutlined />
                  </div>

                </div>


                <p className='w-[295px] md:w-[444px] text-[#596780] text-xs md:text-xl'>
                  NISMO has become the embodiment of Nissan's outstanding performance,
                  inspired by the most unforgiving proving ground, the "race track".
                </p>

                <div className='flex justify-between'>
                  <div className='flex flex-col gap-4'>
                    <h1 className='text-[#90A3BF] text-xs md:text-xl'>Type Car</h1>
                    <span className='text-[#90A3BF] text-xs md:text-xl'>Steering</span>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='text-[#596780] text-xs md:text-xl'>Sport</h1>
                    <span className='text-[#596780] text-xs md:text-xl'>Manual </span>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='text-[#90A3BF] text-xs md:text-xl'>Capacity</h1>
                    <span className='text-[#90A3BF] text-xs md:text-xl'>Gasoline </span>
                  </div>

                  <div className='flex flex-col gap-4 justify-end items-end'>
                    <h1 className='text-[#596780] text-xs md:text-xl'>2 Person</h1>
                    <span className='text-[#596780] text-xs md:text-xl'>70L</span>
                  </div>
                </div>
              </div>

              <div className='mt-[20px] md:mt-[68px] flex justify-between'>
                <div className='flex flex-col gap-1'>
                  <h1 className='font-bold text-xl md:text-[28px]'>$80.00/ <span className='text-[#90A3BF] text-[16px]'>days</span></h1>
                  <span className='line-through text-[#90A3BF] text-xs md:text-[16px]'>$100.00</span>
                </div>
                <button className="bg-[#3563E9] text-white font-semibold w-[100px] h-[36px] md:w-[140px] md:h-[56px] rounded-md">
                  Rent Now
                </button>
              </div>

            </div>
          </div>



          <div className=' bg-white flex flex-col gap-6  max-w-[1016px] p-6 rounded-xl'>

            <h1 className='text-[20px] text-[#1A202C]'>Reviews</h1>
            <div className='flex items-start justify-start gap-3'>
              <img src={profilOne} className='md:w-14 md:h-14 w-11 h-11' />
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <div>
                    <h1 className='text-[16px] md:text-xl'>Alex Stanton</h1>
                    <span className='text-[12px] md:text-[16px]'>CEO at Bukalapak</span>
                  </div>
                  <div className='flex flex-col items-end gap-1'>
                    <span className='text-xs md:text-sm'>22 July 2022</span>
                    <Rate onChange={setValue} value={value} style={{ fontSize: 12 }} />
                  </div>
                </div>
                <p className='md:w-[896px] w-[230px] text-sm text-[#596780]'>
                  We are very happy with the service from the MORENT App.
                  Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition,
                  the service provided by the officers is also very friendly and very polite.
                </p>
              </div>
            </div>

            <div className='flex items-start justify-start gap-3'>
              <img src={profilTwo} className='md:w-14 md:h-14 w-11 h-11' />
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <div>
                    <h1 className='text-[16px] md:text-xl' >Skylar Dias</h1>
                    <span>CEO at Amazon</span>
                  </div>
                  <div className='flex flex-col items-end gap-1'>
                    <span className='text-xs md:text-sm'>20 July 2020</span>
                    <Rate onChange={setValue} value={value} style={{ fontSize: 12 }} />
                  </div>
                </div>
                <p className='md:w-[896px] w-[230px] text-sm  text-[#596780]'>
                  We are greatly helped by the services of the MORENT Application.
                  Morent has low prices and also a wide variety of cars with good and comfortable facilities.
                  In addition, the service provided by the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
            <div className='text-center'>
              <button className="text-[#90A3BF]">Show All</button>
            </div>

          </div>


          <div className='max-w-[1016px]'>
            <div className='flex justify-between items-center mb-4'>
              <h1>Rent Car</h1>
              <button>View All</button>
            </div>

            <div className="flex gap-4 md:gap-14  overflow-x-auto md:overflow-x-visible no-scrollbar">

              {visibleCars.map(car => (
                <CarBox key={car.id} {...car} />
              ))}

            </div>
          </div>

          <div className='max-w-[1016px]'>
            <div className='flex justify-between items-center mb-4'>
              <h1>Recomendation Car</h1>
              <button>View All</button>
            </div>
            <div className="flex items-center justify-start gap-14 mt-5 overflow-x-auto md:overflow-x-visible no-scrollbar mb-3">
              {TwovisibleCars.map(car => (
                <CarBox key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details