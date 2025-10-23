import { BellFilled, FilterOutlined, HeartFilled, MenuOutlined, SearchOutlined, SettingFilled } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const icons = [<HeartFilled />, <BellFilled />, <SettingFilled />];
  return (

    <header className="bg-white ">

      <div className='w-full max-w-[1350px] md:h-[120px] h-[250px] mx-auto my-0'>


        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center p-10 md:h-[124px]  gap-8 md:gap-0">
          {/* Left side: Logo + Search */}
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-16 gap-5">
            <Link to="/">
              <h1 className="text-[32px] text-[#3563E9] font-bold">Morent</h1>
            </Link>
            <div className=" w-[270px] sm:w-[350px] md:w-[492px]">
              <Input
                placeholder="Search something here"
                prefix={<SearchOutlined />}
                suffix={<FilterOutlined />}
                size="large"
                style={{
                  borderRadius: "9999px", // tam yuvarlaq
                }}
              />
            </div>
          </div>

          {/* Right side: Icons / Menu / Profile */}
          <div className="flex items-center justify-between md:justify-start md:gap-5 w-full md:w-auto">
            {/* Left side - icons (desktop) */}
            <div className="hidden md:flex gap-5">
              {icons.map((icon, index) => (
                <button
                  key={index}
                  className="border border-[#C3D4E966] w-[44px] h-[44px] rounded-full flex items-center justify-center"
                >
                  {React.cloneElement(icon, { className: "text-[#596780]" })}
                </button>
              ))}
            </div>

            {/* Menu icon (only mobile) */}
            <div className="md:hidden">
              <MenuOutlined />
            </div>

            {/* Right side image */}
            <div>
              <img src="/src/assets/Image.png" alt="profile" />
            </div>
          </div>
        </div>

      </div>
    </header>

  )
}

export default Header