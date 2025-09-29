import Card from "../components/card/Card"
import car from '../assets/car.png';
import carTwo from '../assets/carTwo.png';
import Swap from '../assets/Swap.png';
import Delivery from "../components/delivery/Delivery";
import CarBox from "../components/carBox/CarBox";
import Gas from '../assets/GasStation.png';
import Royce from '../assets/Rolls-Royce.png';
import Nissan  from '../assets/nissangtr.png';
import Manual from '../assets/Manual.png';
import Profiluser from '../assets/user.png';
import { HeartOutlined } from "@ant-design/icons";


const Home = () => {
  return (
    <div className="mt-8">
      <div className='w-[90%] max-w-[1320px] mx-auto my-0' >
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
                location="Location"
                date="Date"
                time="Time"
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
                location="Location"
                date="Date"
                time="Time"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-5 ">
            <div className="flex justify-between items-center mt-9">
              <h1 className="cursor-pointer">Popular Car</h1>
              <button>View All</button>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-5  md:justify-between">

              <CarBox
                title="Koenigsegg"
                type="Sport"
                price="$99.00"
                image={car}
                people="2 People"
                gas="90L"
                heart={<HeartOutlined />}
                imageGas={Gas}
                imagePeople={Profiluser}
                imageManual={Manual}
              />
              <CarBox
                title="Nissan GT - R"
                type="Sport"
                price="$80.00"
                discount="$100.00"
                image={Nissan}
                people="2 People"
                gas="80L"
                heart={<HeartOutlined />}
                imageGas={Gas}
                imagePeople={Profiluser}
                imageManual={Manual}
              />
              <CarBox
                title="Rolls - Royce"
                type="Sport"
                price="$96.00"
                image={Royce}
                people="4 People"
                gas="70L"
                heart={<HeartOutlined />}
                imageGas={Gas}
                imagePeople={Profiluser}
                imageManual={Manual}
              />
              <CarBox
                title="Nissan GT - R"
                type="Sport"
                price="$80.00"
                discount="$100.00"
                image={Nissan}
                people="2 People"
                gas="80L"
                heart={<HeartOutlined />}
                imageGas={Gas}
                imagePeople={Profiluser}
                imageManual={Manual}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home