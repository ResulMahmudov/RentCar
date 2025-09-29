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
  heart
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-start justify-center bg-white p-6 rounded-xl w-[300px] md:w-[300px] mb-4">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[#1A202C] font-bold text-xl">{title}</h1>
            <h2 className="text-[#90A3BF]">{type}</h2>
          </div>
          <div>
            {heart}
          </div>
        </div>

        <div className="mt-16">
          <img src={image} alt={title} />
        </div>

        <div className="flex items-center w-full justify-between mt-9">
          <div className="flex items-center gap-[6px]">
            <img src={imageGas} alt="gas" />
            <h3 className="text-[#90A3BF] text-sm">{gas}</h3>
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

        <div className="flex justify-between w-full mt-5">
          <div>
            <h1 className="text-[#1A202C] text-xl font-bold">
              {price}/<span className="text-[#90A3BF]  text-sm ml-2">day</span>
            </h1>
            <p className="line-through text-[#90A3BF]">{discount}</p>
          </div>
          <button className="bg-[#3563E9] text-white font-semibold py-2 px-4 rounded-md">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBox;