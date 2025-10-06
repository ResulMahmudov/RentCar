import Card from "../components/card/Card"
import car from '../assets/car.png';
import carTwo from '../assets/carTwo.png';
import Swap from '../assets/Swap.png';
import Delivery from "../components/delivery/Delivery";
import CarBox from "../components/carBox/CarBox";
import { cars } from "../components/carBox/DataCarBox";


const Home = () => {
  const selectedIds = [9, 10, 11, 12];
  const visibleCars = cars.filter(car => selectedIds.includes(car.id));

  const TwoselectedIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const TwovisibleCars = cars.filter(car => TwoselectedIds.includes(car.id));
  return (
    <div className="mt-8">
      <div className='w-[90%] max-w-[1340px] mx-auto my-0' >
        <div>
          <div className="flex flex-col">
            <div className="flex overflow-x-auto no-scrollbar md:justify-between md:overflow-visible gap-5">
              <Card
                title="The Best Platform for Car Rental"
                description="Ease of doing a car rental safely and reliably. Of course at a low price."
                buttonText="Rental Car"
                background="bg-[#54A6FF]"
                BtnBg="bg-[#3563E9]"
                image={car}
                left=" md:ml-[20%]"
              />
              <Card
                title="Easy way to rent a car at a low price"
                description="Providing cheap car rental services and safe and comfortable facilities."
                buttonText="Rental Car"
                background="bg-[#3563E9]"
                BtnBg="bg-[#54A6FF]"
                image={carTwo}
                left=" md:ml-[25%]"
              />
            </div>
            <div className="mt-8 flex  gap-10 md:gap-0 flex-col md:flex-row justify-center items-center md:justify-between relative">
              {/* Pick-up */}
              <Delivery
                title="Pick-up"
              />

              {/* Swap Button */}
              <button
                className="w-[60px] h-[60px] flex items-center justify-center bg-[#3563E9] rounded-xl
                absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2"
              >
                <img src={Swap} alt="swap" />
              </button>

              {/* Drop-off */}
              <Delivery
                title="Drop-off"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center mt-9">
              <h1 className="cursor-pointer">Popular Car</h1>
              <button>View All</button>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-5  md:justify-between">

              {visibleCars.map(car => (
                <CarBox key={car.id} {...car} />
              ))}

            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 mt-5 mb-5">
            <div className="!container text-start">
              <h1>Recomendation Car</h1>
            </div>

            <div className="flex items-center justify-start   gap-8 flex-wrap mt-5">

              {TwovisibleCars.map(car => (
                <CarBox key={car.id} {...car} />
              ))}

            </div>

            <div className="w-[156px] h-[44px] bg-[#3563E9] flex items-center justify-center rounded">
              <button className="text-white">Show more car</button>
            </div>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home