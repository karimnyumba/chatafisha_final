import React from "react";
import { NavBar, Text, Img } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import Button from "components/adminComponents/Button";
import Select from 'react-select'


const RegistrationBio = () => {
  const navigate = useNavigate();
  const { credit } = useGlobalContext();
  console.log(credit);
  const options = [
    { value: '2023', label: '2023' },
  ]

  const data = {
    id: 12354,
    name: "Baraka Ramadhani",
    loc: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.40 1.png",
    avarage_daily: "50kg",
    total_collected: "530kg",
    sold: "350kg",
    amount_selling: "180kg",
    title: "Join our open house event",
    content:
      "Chatafisha will be hosting it’s second open house event this year to share our",
  };

  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_loginpage.png')" }}
    >
      <NavBar />
      <div className="flex flex-wrap gap-3 mt-3">
        <div
          className=" w-[290px] h-[500px] pl-5  rounded-xl  bg-green-500   float-left sm:w-full md:w-full"
          style={{ backgroundColor: "#38C18C" }}
        >
          <div className="pl-1 mt-4">
            <Text
              className="text-white  mt-3 text-xl flex flex-col justify-center md:items-center"
              style={{ color: "#fff" }}
            >
              <span>Register</span>
              Information
            </Text>
          </div>
          <div className="md:ml-24 sm:ml-3">
            {/* <Text className="text-white mt-1 text-xl flex flex-col" 
            style={{color:'#fff', fontSize:'10px'}}>Name of Picker / Organization</Text> */}
            <label
              for="email-address-icon"
              className="text-white mt-1 text-xl flex flex-col"
              style={{ color: "#fff", fontSize: "10px" }}
            >
              Name of Picker / Organization
            </label>
            <div class="relative">
              <input
                type="text"
                id="email-address-icon"
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-64 pl-2 p-2.5 md:w-[80%]   h-11"
                style={{ backgroundColor: "#D9D9D9" }}
                placeholder=""
              />
            </div>
            <Text
              className="text-white mt-1 text-xl flex flex-col"
              style={{ color: "#fff", fontSize: "10px" }}
            >
              Date of registration
            </Text>
            <div class="relative">
              <input
                type="text"
                id="email-address-icon"
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-64 pl-2 p-2.5 md:w-[80%]   h-11"
                style={{ backgroundColor: "#D9D9D9" }}
                placeholder=""
              />
            </div>
            <Text
              className="text-white mt-1 text-xl flex flex-col"
              style={{ color: "#fff", fontSize: "10px" }}
            >
              Registration No.
            </Text>
            <div class="relative">
              <input
                type="text"
                id="email-address-icon"
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-44 pl-2 p-2.5 md:w-[80%]    h-11"
                style={{ backgroundColor: "#D9D9D9" }}
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <Text
                  className="text-white mt-1 text-xl flex flex-col"
                  style={{ color: "#fff", fontSize: "10px" }}
                >
                  Location
                </Text>
                <div class="relative ">
                  <input
                    type="text"
                    id="email-address-icon"
                    class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-28 pl-2 p-2.5  md:w-[80%]   h-11"
                    style={{ backgroundColor: "#D9D9D9" }}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="">
                <Text
                  className="text-white mt-1 text-xl flex flex-col"
                  style={{ color: "#fff", fontSize: "10px" }}
                >
                  Location
                </Text>
                <div class="relative ">
                  <input
                    type="text"
                    id="email-address-icon"
                    class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-28 pl-2 p-2.5 md:w-[60%]    h-11"
                    style={{ backgroundColor: "#D9D9D9" }}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-[30%] sm:ml-6">
            <button
              className=" rounded-lg text-xs px-2 mt-4 h-11 w-64 text-center"
              style={{ backgroundColor: "#252424" }}
            >
              {" "}
              <Text style={{ color: "#A5F5A8", fontSize: "10px" }}>
                SELL CARBON CREDIT
              </Text>
            </button>
          </div>

          <div className="text-center">
            <Text
              className="text-white mt-3 flex flex-col"
              style={{ color: "#fff", fontSize: "8px" }}
            >
              <span>
                if you don’t have a registration number please contact
              </span>
              our website help center or dial *150*88#
            </Text>
          </div>
        </div>
        <div
          className="relative w-[490px] h-[500px] md:w-full sm:w-full rounded-xl overflow-x-visible bg-green-500   float-left"
          style={{ backgroundColor: "#38C18C" }}
        >
          <div className="mt-10 flex flex-wrap justify-between px-8 ">
            <div className="flex">
              <div class="flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
                <Img src={data.avatar} className=" w-20 h-20 rounded-full" />
              </div>
              <div className="pl-2 mt-2">
                <Text
                  className="  text-sm"
                  style={{ color: "#F8F8F8", fontSize: "14px" }}
                  variant="body1"
                >
                  {data.name}
                  <br />
                  ID: {data.id}
                  <br />
                </Text>

                <Text
                  className="text-sm flex"
                  style={{ color: "#D9D9D9", fontSize: "9px" }}
                >
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.71963 0.90654C2.56161 0.90654 0 3.37209 0 6.41168C0 10.5405 5.71963 16.6355 5.71963 16.6355C5.71963 16.6355 11.4393 10.5405 11.4393 6.41168C11.4393 3.37209 8.87764 0.90654 5.71963 0.90654ZM5.71963 8.3778C4.59202 8.3778 3.6769 7.497 3.6769 6.41168C3.6769 5.32636 4.59202 4.44556 5.71963 4.44556C6.84723 4.44556 7.76235 5.32636 7.76235 6.41168C7.76235 7.497 6.84723 8.3778 5.71963 8.3778Z"
                      fill="#E6F1F3"
                    />
                  </svg>
                  {data.loc}
                  <br />
                </Text>
                <button className=" border-2 rounded-lg text-center text-xs w-20  text-white bg-transparent hover:bg-green-400">
                  {" "}
                  contact
                </button>
              </div>
            </div>
            <div className="sm:mt-[-10px] sm:flex sm:gap-11 ">
              <div
                className=" font-bold text-xs rounded-full px-4 pt-1 mt-3 h-6 w-16 justify-center align-middle"
                style={{ backgroundColor: "#5271FF" }}
              >
                <i class="fas fa-recycle   text-white"></i>
              </div>
              <div
                className="rounded-xl shadow-sm  w-32 h-[77px] sm:h-12  text-center mt-3  items-center sm:mt-4 md:mt-7"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="flex flex-col space-x-3 pt-2">
                  <svg
                    className="ml-6"
                    width="58"
                    height="11"
                    viewBox="0 0 58 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.03972L3.36897 7.91614C4.87013 7.20415 6.65317 7.47421 7.87616 8.59881V8.59881C9.42482 10.0229 11.8027 10.0348 13.3656 8.62641L15.0479 7.11039C15.3222 6.86321 15.6267 6.65176 15.9541 6.48106L18.0609 5.38257C19.2943 4.73951 20.76 4.72125 22.009 5.33339L22.9498 5.7945C24.1644 6.38977 25.586 6.38977 26.8006 5.7945L29.1241 4.65576C29.5243 4.45963 29.8922 4.20349 30.215 3.89622L32.3373 1.87618C33.6335 0.642465 35.5503 0.322471 37.1769 1.06825L38.6171 1.72852C39.0926 1.94657 39.5253 2.24815 39.8944 2.61894L43.4698 6.21077C43.8173 6.55984 44.2212 6.84773 44.6646 7.06229L48.2443 8.79478C48.5803 8.95741 48.9358 9.07636 49.302 9.14873L52.3456 9.75021C53.044 9.88822 53.7655 9.85374 54.4475 9.64974L57 8.88628"
                      stroke="#4CAF50"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Text
                    style={{ color: "#4CAF50", fontSize: "13px" }}
                    className="font-bold"
                  >
                    Selling 1kg
                  </Text>
                  <Text
                    style={{ color: "#4CAF50", fontSize: "13px" }}
                    className="font-bold"
                  >
                    USD $1
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[38%] p-[10px] w-full h-80 text-center items-center  rounded-3xl flex flex-col gap-2 "
            style={{ backgroundColor: "#D8DFE0" }}
          >
            <div className="flex flex-row space-x-6  justify-evenly w-full ">
              <Text className="text-sm font-bold">Dash Board</Text>
              <Select options={options}  defaultValue={options[0]}   />
            </div>
            <div
              className="rounded-xl shadow-sm  w-[400px] h-[130px] text-center sm:w-full items-center sm:mt-4 md:mt-7"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="flex flex-row space-x-6 justify-evenly w-full ">
                <div className="flex flex-col space-y-3 pl-2">
                  <div className="flex flex-col space-y-1 pt-2">
                    <Text style={{ fontSize: "29px" }}>
                      {data.total_collected}
                    </Text>
                  </div>
                  <Text style={{ fontSize: "6px", color: "#5271FF" }}>
                    Type of plastic collected
                  </Text>
                  <div className="flex space-x-1">
                    <Text
                      style={{ fontSize: "11px" }}
                      className="flex flex-col"
                    >
                      WCC
                      <span style={{ fontSize: "5px" }}>
                        waste collected credit
                      </span>
                      <span style={{ fontSize: "22px" }}>71kg</span>
                    </Text>
                    <div className="h-9 border-r-2"></div>
                    <Text
                      style={{ fontSize: "11px" }}
                      className="flex flex-col"
                    >
                      WRC
                      <span style={{ fontSize: "5px" }}>
                        waste collected credit
                      </span>
                      <span style={{ fontSize: "22px" }}>109kg</span>
                    </Text>
                  </div>
                </div>
                <div className="pt-3">
                  <Text className="pt-2">waste accounted for</Text>
                  <div className="flex flex-row gap-1 mt-1">
                    <button
                      className="inline-block  text-center rounded-sm  h-4 w-10    align-middle"
                      style={{ backgroundColor: "#D4F0CA", fontSize: "3px" }}
                    >
                      Polycarbonate (PC)
                    </button>
                    <button
                      className="inline-block  text-center rounded-sm h-4 w-10   align-middle"
                      style={{ backgroundColor: "#D4F0CA", fontSize: "3px" }}
                    >
                      Polyethylene (PE)
                    </button>
                    <button
                      className="inline-block  text-center rounded-sm h-4 w-10  align-middle"
                      style={{ backgroundColor: "#D4F0CA", fontSize: "3px" }}
                    >
                      Polypropylene (PP)
                    </button>
                    <button
                      className="inline-block  text-center rounded-sm  h-4 w-12  align-middle"
                      style={{ backgroundColor: "#F5DBD1", fontSize: "3px" }}
                    >
                      Copy Polyethylene Terephthalate (PETE or PET)
                    </button>
                  </div>
                  <div className="w-auto border-b-2 my-1"></div>
                  <div className="flex flex-row gap-1">
                    <button
                      className="inline-block  text-center rounded-sm h-4 w-14  align-middle"
                      style={{ backgroundColor: "#D9D9D9", fontSize: "3px" }}
                    >
                      Polyvinyl Chloride (PVC)
                    </button>
                    <button
                      className="inline-block  text-center rounded-sm h-4 w-20    align-middle"
                      style={{ backgroundColor: "#D4F0CA", fontSize: "3px" }}
                    >
                      Acrylonitrile-Butadiene-Styrene (ABS)
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 ">
                <Text className="text-center" style={{ fontSize: "8px" }}>
                  Meet Baraka Ramadhani, a dedicated and hardworking day-to-day
                  plastic picker who has been working in this field for eight
                  years now. Baraka is passionate about keeping the environment
                  clean and free from plastic waste.
                </Text>
                <br className="p-10"/>
                <Text className="text-center pt-10" style={{ fontSize: "8px" }}>
                  On an average day, Baraka picks up an impressive 50 kilograms
                  of plastic waste. This is no small feat! Through his hard work
                  and dedication, Baraka has helped to prevent tons of plastic
                  from ending up in our oceans and natural habitats
                </Text>
              </div>
            </div>

            {/* <div
            className="rounded-xl shadow-sm  w-72 h-[260px] text-center items-center sm:mt-4 md:mt-7"
            style={{ backgroundColor: "#E7EEE4" }}
          >
            <div className="flex justify-around ">
              <div className="flex flex-row space-x-16 pt-6">
                <div className="flex flex-col space-y-2">
                  <Text
                    className="flex flex-col  text-sm"
                    style={{ color: "", fontSize: "6px" }}
                    variant="body1"
                  >
                    <span>Account wallet:</span>

                    <span> NIPE FAGIO</span>

                    <span>Reg: 12356wallet</span>
                  </Text>
                  <div
                    className="inline-block  text-center rounded-full px-3 pt-1 h-3 w-16 justify-center align-middle"
                    style={{ backgroundColor: "#86F3E0", fontSize: "4px" }}
                  >
                    Funds commited
                  </div>
                  <Text
                    className="font-bold"
                    style={{ fontSize: "21px" }}
                    variant="body1"
                  >
                    $130
                  </Text>
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    className="inline-block  text-center rounded-full px-3 pt-1 h-5 w-28 justify-center align-middle"
                    style={{ backgroundColor: "#90E5A8", fontSize: "9px" }}
                  >
                    carborn credits
                  </div>
                  <Text
                    className="font-bold"
                    style={{ fontSize: "30px", color: "#716C6C" }}
                    variant="body1"
                  >
                    o.25
                  </Text>
                </div>
              </div>
            </div>

            <Text
              className="font-normal"
              style={{ fontSize: "7px" }}
              variant="body1"
            >
              Select your payment method
              <svg
                className="ml-[28%]"
                width="126"
                height="2"
                viewBox="0 0 126 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.000322007"
                  y1="0.910482"
                  x2="125.326"
                  y2="1.36129"
                  stroke="black"
                  stroke-width="0.179037"
                />
              </svg>
            </Text>
            <div className="w-[70%] flex justify-center items-center ml-[17%]">
              <form>
              <label
                  for="email-address-icon"
                  class="block text-xs font-medium text-gray-900 text-left "
                  style={{fontSize:"7px"}}
                >
                  Bank
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Img
                        src="images/a.png"
                        className="h-2 mt-0.5 w-9"
                        alt="plus"
                    />
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg text-xs block w-full pl-2 p-2.5 h-7"
                    placeholder=""
                  />
                </div>
                <label
                  for="email-address-icon"
                  class="block text-xs font-medium text-gray-900 text-left "
                  style={{fontSize:"7px"}}
                >
                  Mobile Payment
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Img
                        src="images/pngwing 1.png"
                        className="h-4 mt-0.5 w-4"
                        alt="plus"
                    />
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full pl-2 p-2.5   h-7"
                    placeholder=""
                  />
                </div>
                <label
                  for="email-address-icon"
                  class="block text-xs font-medium text-gray-900 text-left "
                  style={{fontSize:"7px"}}
                >
                  Mobile Payment
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full pl-2 p-2.5   h-7"
                    placeholder=""
                  />
                </div>
              </form>
            </div>
          </div> */}
          </div>
        </div>
        <div
          className=" w-[290px] h-[500px] md:w-full sm:w-full rounded-xl pl-5 md:px-40 sm:px-10 overflow-x-visible bg-green-500  "
          style={{ backgroundColor: "#38C18C" }}
        >
          <div className="mt-4 text-center">
            <Text
              className="text-white mt-3 text-xl flex flex-col"
              style={{ color: "#fff" }}
            >
              <span>Wallet</span>
            </Text>
          </div>
          <div
            className="inline-block  text-center rounded-full px-3 pt-1 items-start mt-3 h-5 w-28  align-middle"
            style={{ backgroundColor: "#90E5A8", fontSize: "9px" }}
          >
            Amount raised
          </div>
          <div
            className="rounded-xl shadow-sm  w-52 h-[83px] text-center mt-3  items-center md:w-full sm:mt-4 md:mt-7"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <Text
              className="pt-4 text-xl flex flex-col justify-between"
              style={{ color: "#070707", fontSize: "26px" }}
            >
              <span>1,219,000</span>
              <span style={{ color: "#9F9F9F", fontSize: "10px" }}>
                wallet balance TSH
              </span>
            </Text>
          </div>
          <div
            className="inline-block  text-center rounded-full px-3 pt-1 h-5 w-28 mt-3   align-middle"
            style={{ backgroundColor: "#80EEDA", fontSize: "9px" }}
          >
            Total Credit sold
          </div>
          <div
            className="rounded-xl shadow-sm  w-44 h-[48px] text-center mt-3  items-center md:w-full sm:mt-4 md:mt-7"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <Text
              className="pt-1 text-xl flex flex-col justify-between"
              style={{ color: "#070707", fontSize: "26px" }}
            >
              <span>0.530</span>
            </Text>
          </div>
          <div className="rounded-xl shadow-sm bg-white mt-3  w-64  h-[169px] flex  md:w-full justify-around ">
            <div className="flex flex-col space-y-3 pt-2 pl-2">
              <div className="flex flex-col space-y-1 pt-2">
                <Text className="" style={{ fontSize: "8px" }}>
                  Amount Selling
                </Text>

                <Text style={{ color: "#4CAF50", fontSize: "8px" }}>
                  +5% of target
                </Text>

                <Text style={{ fontSize: "29px" }}>{data.amount_selling}</Text>
              </div>
              <Text style={{ fontSize: "11px", color: "#5271FF" }}>
                Type of plastic collected
              </Text>
              <div className="flex space-x-1">
                <Text style={{ fontSize: "11px" }} className="flex flex-col">
                  WCC
                  <span style={{ fontSize: "5px" }}>
                    waste collected credit
                  </span>
                  <span style={{ fontSize: "22px" }}>71kg</span>
                </Text>
                <div className="h-9 border-r-2"></div>
                <Text style={{ fontSize: "11px" }} className="flex flex-col">
                  WRC
                  <span style={{ fontSize: "5px" }}>
                    waste collected credit
                  </span>
                  <span style={{ fontSize: "22px" }}>71kg</span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col pt-2  space-y-1">
              <div className="flex  mt-2">
                <div className="flex flex-col space-x-3">
                  <svg
                    className="ml-6"
                    width="58"
                    height="11"
                    viewBox="0 0 58 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.03972L3.36897 7.91614C4.87013 7.20415 6.65317 7.47421 7.87616 8.59881V8.59881C9.42482 10.0229 11.8027 10.0348 13.3656 8.62641L15.0479 7.11039C15.3222 6.86321 15.6267 6.65176 15.9541 6.48106L18.0609 5.38257C19.2943 4.73951 20.76 4.72125 22.009 5.33339L22.9498 5.7945C24.1644 6.38977 25.586 6.38977 26.8006 5.7945L29.1241 4.65576C29.5243 4.45963 29.8922 4.20349 30.215 3.89622L32.3373 1.87618C33.6335 0.642465 35.5503 0.322471 37.1769 1.06825L38.6171 1.72852C39.0926 1.94657 39.5253 2.24815 39.8944 2.61894L43.4698 6.21077C43.8173 6.55984 44.2212 6.84773 44.6646 7.06229L48.2443 8.79478C48.5803 8.95741 48.9358 9.07636 49.302 9.14873L52.3456 9.75021C53.044 9.88822 53.7655 9.85374 54.4475 9.64974L57 8.88628"
                      stroke="#4CAF50"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Text
                    style={{ color: "#4CAF50", fontSize: "15px" }}
                    className="font-bold"
                  >
                    Selling 1kg
                  </Text>
                  <Text
                    style={{ color: "#4CAF50", fontSize: "15px" }}
                    className="font-bold"
                  >
                    USD $1
                  </Text>
                </div>
              </div>
              {/* <div>
                  <button
                    className="ml-1  mr-1 rounded-lg text-xs w-20 h-12 mt-4 text-white  hover:bg-black-400"
                    style={{ backgroundColor: "#9A9292" }}
                  >
                    {" "}
                    Weight
                  </button>
                  <button
                    className=" rounded-lg text-xs  w-20 h-12  mt-4 text-white  hover:bg-green-400"
                    style={{ backgroundColor: "#90E5A8" }}
                  >
                    {" "}
                    Amount
                  </button>
                </div>

                <button className=" border-2 rounded-lg text-xs w-36 bg-transparent   hover:bg-gray-400  h-9 m-3">
                  {" "}
                  BUY
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBio;
