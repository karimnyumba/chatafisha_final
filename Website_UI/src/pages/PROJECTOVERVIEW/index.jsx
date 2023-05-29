import { NavBar, Text, Img } from "components";
import React from "react";

const ProjectOverview = () => {
  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_loginpage.png')" }}
    >
      <NavBar />

      <div className="flex flex-wrap gap-3 mt-3">
        <div
          className=" w-[290px] h-[500px] pl-5  rounded-xl  bg-green-500   float-left sm:w-full"
          style={{ backgroundColor: "#647276" }}
        >
          <div className="pl-1 mt-4">
            <Text
              className="text-white mt-3 text-xl flex flex-col"
              style={{ color: "#fff" }}
            >
              <span>Register</span>
              Information
            </Text>
          </div>
          <div>
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
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-64 pl-2 p-2.5   h-11"
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
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-64 pl-2 p-2.5   h-11"
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
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-44 pl-2 p-2.5   h-11"
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
                    class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-28 pl-2 p-2.5   h-11"
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
                    class=" border border-gray-300 text-gray-900 text-xs rounded-lg  block w-28 pl-2 p-2.5   h-11"
                    style={{ backgroundColor: "#D9D9D9" }}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">
            <button
              className=" rounded-lg text-xs px-2 mt-4 h-11 w-64 text-center"
              style={{ backgroundColor: "#252424" }}
            >
              {" "}
              <Text style={{ color: "#A5F5A8", fontSize: "10px" }}>
                SELL CARBON CREDIT
              </Text>
            </button>
          </div> */}

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
          className="relative w-[703px] h-[500px]  sm:w-full rounded-xl overflow-x-visible bg-green-500   float-left"
          style={{ backgroundColor: "#CFD0D0" }}
        >
            <div>
                
            </div>
            <div></div>

        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
