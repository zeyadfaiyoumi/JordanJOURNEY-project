import BannerImg from "../../assets/hero/carde.jpg";

import { GiFoodTruck } from "react-icons/gi";
// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 shadow-xl mt-9">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm leading-5 tracking-wide text-gray-500"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              {/* <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div> */}
              {/* <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div> */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="w-12 h-12 p-4 text-4xl bg-yellow-100 rounded-full shadow-sm dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
