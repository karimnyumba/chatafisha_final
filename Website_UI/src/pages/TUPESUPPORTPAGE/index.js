import { NavBar, Text, Carousel, Img } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";

function TupeSupport() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <div className="w-full">
        <NavBar />
      </div>
      <div className="flex flex-row sm:flex-wrap md:flex-wrap gap-6 justify-center align-middle space-x-16 mt-[50px] w-[80%]">
        <div className=" mb-2.5 relative md:w-full">
          <Img
            src="images/Rectangle 17.png"
            className="h-[365px] object-cover rounded-[16px] w-[460px] md:w-full md:h-full sm:h-full sm:w-[100%]"
            alt="rectangleFour"
          />
          <div className="absolute mb-0 top-[0] right-0 h-16 w-16">
            <svg
              width="70"
              height="20"
              className="common-pointer h-[51px] md:ml-[-3rem] md:p-1 w-auto ml-[-1.5rem] p-3"
              viewBox="0 0 74 54"
              color="white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => navigate("/homepage")}
            >
              <path
                d="M26.7313 1.61938L1.53076 26.8199L26.7313 52.0205M72.1089 26.8199H2.23654"
                stroke="black"
                stroke-width="2.83929"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
          <div class="pt-2 relative mx-auto top-36 sm:top-0 md:top-0 text-gray-600">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pr-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class="block px-5 pl-10 w-full text-sm text-gray-900 bg-black_900_19 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required/>
        </div>
            <Text
              className=" font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic  text-left"
              as="h4"
              variant="h4"
            >
              <strong>Tupe Support</strong>
              <br />

              <span className="text-sm sm:text-xs" style={{ color: "#7A7A7A" }}>
                Our platform helps you source and fund initiatives
                <br />
                that align with your values and mission. We track
                <br />
                the impact of your investment, and measure the
                <br />
                results all in one stop
              </span>
            </Text>
          </div>

          <div className="common-pointer bg-indigo_A200 flex sm:flex-1 flex-col gap-[45px] items-end justify-between mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px] h-40 md:w-48">
            <Img src="images/img_plus.svg" className="h-4 w-4" alt="plus_Two" />
            <Text
              className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px]   text-left text-white_A700 sm:mt-[-15px]  md:mr-[65%]"
              variant="body2"
            >
              <>
                Tupe
                <br />
                Support
              </>
            </Text>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start mt-[5px] w-full">
        <div className="flex flex-row md:gap-10 items-end justify-between mt-[22px] w-[99%] md:w-full">
          <Text
            className="text-black_900 text-left w-auto"
            as="h3"
            variant="h3"
          >
            PROJECTS
          </Text>
          <div className="flex flex-row gap-2 items-center justify-between my-1 w-[16%] sm:w-[35%]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-auto h-auto "
              as="h6"
              variant="h6"
            >
              View All
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="common-pointer h-auto w-auto"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[15px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 pr-[25px] w-full">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TupeSupport;
