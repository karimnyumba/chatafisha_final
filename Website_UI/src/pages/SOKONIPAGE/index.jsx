import React from "react";
import { NavBar, Text, Img, SokoniCarosel } from "components";
import { useNavigate } from "react-router-dom";

function SokoniPage() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-auto sm:h-[100%] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <NavBar />
      <div className="flex flex-wrap justify-around w-[80%]  mt-[50px]">
        <div className="">
          <div className="flex justify-between ">
            <svg
              width="70"
              height="50"
              className="common-pointer mt-4 mr-6"
              viewBox="0 0 74 54"
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
            <Text
              className="font-bold md:ml-[0] md:mt-0 mt-0.5 text-dark text-left w-auto"
              as="h2"
              variant="h2"
            >
              <span
                className="decoration-solid"
                style={{
                  color: "white",
                  fontSize: "35px",
                  WebkitTextStroke: "1px black",
                }}
              >
                {" "}
                Sokoni
              </span>
              <br />
              <strong className="" style={{ fontSize: "20px" }}>
                verified Plastic off-set carbon credits
              </strong>
            </Text>
          </div>
          <Text
            className="font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic  text-left sm:text-sm"
            as="h6"
            variant="h6"
          >
            <strong>
              +Impact real change while earning carbon credits
              <br />
              our platform features{" "}
              <span className="text-green_403">verified </span>
              plastic collectors
              <br />
              and recycling projects
            </strong>
          </Text>
        </div>
        <div className="common-pointer bg-green_403 sm:flex-1 flex flex-col  items-end justify-between  mt-0.5 p-[9px]  md:w-[50%] md:h-[150px] rounded-[23px] w-[200px] sm:w-[120px] sm:h-[150px] ">
          <Img
            src="images/img_plus.svg"
            className="h-4 mt-0.5 w-4"
            alt="plus_One"
          />
          <div className="flex flex-col items-start justify-end  w-auto md:w-full  mr-[40%] sm:mr-[50%] md:mr-[65%]">
            <Text
              className="font-bold   ml-[10px] text-center text-white_A700 "
              variant="body2"
            >
              Sokoni
            </Text>
            <Text
              className="font-bold  ml-[10px] text-center text-white_A700"
              variant="body2"
            >
              Market place
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:gap-10 items-end justify-between mt-[22px] w-[80%] md:w-full">
      
        <div className=" inline-flex space-x-2 ">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 6.26665V1.73331C13.3333 0.733313 12.9067 0.333313 11.8467 0.333313H9.15334C8.09334 0.333313 7.66667 0.733313 7.66667 1.73331V6.26665C7.66667 7.26665 8.09334 7.66665 9.15334 7.66665H11.8467C12.9067 7.66665 13.3333 7.26665 13.3333 6.26665ZM6.33334 7.73331V12.2666C6.33334 13.2666 5.90667 13.6666 4.84667 13.6666H2.15334C1.09334 13.6666 0.666672 13.2666 0.666672 12.2666V7.73331C0.666672 6.73331 1.09334 6.33331 2.15334 6.33331H4.84667C5.90667 6.33331 6.33334 6.73331 6.33334 7.73331ZM13.3333 12.2666V10.4C13.3333 9.39998 12.9067 8.99998 11.8467 8.99998H9.15334C8.09334 8.99998 7.66667 9.39998 7.66667 10.4V12.2666C7.66667 13.2666 8.09334 13.6666 9.15334 13.6666H11.8467C12.9067 13.6666 13.3333 13.2666 13.3333 12.2666ZM6.33334 3.59998V1.73331C6.33334 0.733313 5.90667 0.333313 4.84667 0.333313H2.15334C1.09334 0.333313 0.666672 0.733313 0.666672 1.73331V3.59998C0.666672 4.59998 1.09334 4.99998 2.15334 4.99998H4.84667C5.90667 4.99998 6.33334 4.59998 6.33334 3.59998Z"
            fill="black"
          />
        </svg>

        <Text className="text-black_900 text-left w-auto" as="h3" variant="body1">
          Latest Credits
        </Text>
        <svg
        className="mt-2"
          width="146"
          height="1"
          viewBox="0 0 146 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="146"
            y2="0.500013"
            stroke="black"
          />
        </svg>
        </div>
        <div className="inline-flex  space-x-4 my-1 w-[16%] sm:w-[35%]">
          <Text
            className="font-normal not-italic text-black_900 text-left w-auto h-auto "
            as="h6"
            variant="h6"
          >
            View All
          </Text>
          <Img
            src="images/img_arrowright.svg"
            className="common-pointer h-auto w-auto mt-[-5px]"
            alt="arrowright"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start mt-[5px]  w-full">
        <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 sm:ml-[50px]  w-full ">
          <SokoniCarosel />
        </div>
      </div>
    </div>
  );
}

export default SokoniPage;
