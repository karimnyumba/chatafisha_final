import { NavBar, Text, Carousel, Img } from "components";
import React from "react";

function TupeSupport() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne h-[100vh] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
     <div className="w-full">
        <NavBar />
      </div>
      TupeSupport
      <div className="flex flex-col items-center justify-start mt-[5px] w-full">
      <div className='flex flex-row md:gap-10 items-end justify-between mt-[22px] w-[99%] md:w-full'>
              <Text
                className='text-black_900 text-left w-auto'
                as='h3'
                variant='h3'
              >
                PROJECTS
              </Text>
              <div className='flex flex-row gap-2 items-center justify-between my-1 w-[16%] sm:w-[35%]'>
                <Text
                  className='font-normal not-italic text-black_900 text-left w-auto h-auto '
                  as='h6'
                  variant='h6'
                >
                  View All
                </Text>
                <Img
                  src='images/img_arrowright.svg'
                  className='common-pointer h-auto w-auto'
                  alt='arrowright'
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-start mt-[15px] shadow-bs w-full'>
              <div className='flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 pr-[25px] w-full'>
                <Carousel />
              </div>
            </div>
      </div>
    </div>
  );
}

export default TupeSupport;
