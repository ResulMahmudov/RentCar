const CarBox = ({
  title,
  type,
  price,
  discount,
  image,
  imageGas,
  imagePeople,
  imageManual,
  people,
  gas,
  heart,
  mobileWidth,
  flex,
  CarFlex,
  BoxImage,
}) => {
  return (
    <div className="flex gap-5">
      <div className={`flex flex-col items-center justify-start bg-white p-6 rounded-xl ${mobileWidth} md:w-[304px] mb-4`}>
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[#1A202C] font-bold text-xl">{title}</h1>
            <h2 className="text-[#90A3BF]">{type}</h2>
          </div>
          <div>
            {heart}
          </div>
        </div>

        <div className={`flex  ${CarFlex} w-full  items-center justify-center`}>
          <div  className={`${BoxImage} mt-16`} >
            <img src={image} alt={title}/>
          </div>

          <div className={` flex ${flex} justify-between mt-9`}>
            <div className="flex items-center gap-[6px]">
              <img src={imageGas} alt="gas" />
              <h3 className="text-[#90A3BF]  text-[12px] md:text-sm ">{gas}</h3>
            </div>
            <div className="flex items-center gap-[6px]">
              <img src={imageManual} alt="manual" />
              <h3 className="text-[#90A3BF] text-sm">Manual</h3>
            </div>
            <div className="flex items-center gap-[6px]">
              <img src={imagePeople} alt="people" />
              <h3 className="text-[#90A3BF] text-sm">{people}</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-5">
          <div>
            <h1 className="text-[#1A202C] text-[17px] md:text-xl font-bold">
              {price}/<span className="text-[#90A3BF]  text-sm ml-2">day</span>
            </h1>
            <p className="line-through text-[12px] md:text-sm text-[#90A3BF]">{discount}</p>
          </div>
          <button className="bg-[#3563E9] text-white font-semibold w-[100px] h-[36px] md:w-[116px] md:h-[44px] rounded-md">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBox;