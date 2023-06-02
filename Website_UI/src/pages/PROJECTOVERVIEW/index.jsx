import { NavBar, Text, Img } from "components";
import React from "react";
import Select from "react-select";

const ProjectOverview = () => {
  const options = [{ value: "certification", label: "certification" }];
  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_loginpage.png')" }}
    >
      <NavBar />

      <div className="flex flex-wrap gap-3 mt-3">
        <div
          className=" w-[290px] h-[500px] pl-5   rounded-xl  bg-green-500 md:w-[780px]  sm:w-full"
          style={{ backgroundColor: "#647276" }}
        >
          <div className="pl-1 mt-4">
            <Text
              className="text-white  mt-3 text-xl flex flex-col justify-center md:items-center "
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
          className="relative w-[780px] h-auto  sm:w-full rounded-xl overflow-x-visible bg-green-500  p-4"
          style={{ backgroundColor: "#CFD0D0" }}
        >
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col  w-40 sm:w-full">
              <div className="flex flex-col">
                <label
                  for="email-address-icon"
                  className="text-xl flex flex-col -mb-2"
                  style={{ fontSize: "10px" }}
                >
                  Project name
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="email-address-icon"
                    class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-60 sm:w-full   pl-2 p-2.5   h-6 -mb-1"
                    style={{
                      backgroundColor: "#fff",
                      color: "#BEB9B9",
                      fontSize: "6px",
                    }}
                    placeholder="Name of project"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:gap-3">
                <div className="">
                  <Text
                    className=" text-xl flex flex-col -mb-2"
                    style={{ fontSize: "9px" }}
                  >
                    Monitoring Period
                  </Text>
                  <div class="relative ">
                    <input
                      type="text"
                      id="email-address-icon"
                      class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-16 sm:w-full pl-2 p-2.5  -mb-1 h-6"
                      style={{
                        backgroundColor: "#fff",
                        color: "#BEB9B9",
                        fontSize: "6px",
                      }}
                      placeholder="DD-MM-YYYY to DD-MM-YYYY"
                    />
                  </div>
                </div>

                <div className="">
                  <Text
                    className="text-xl flex flex-col -mb-2"
                    style={{ fontSize: "9px" }}
                  >
                    Prepared By
                  </Text>
                  <div class="relative ">
                    <input
                      type="text"
                      id="email-address-icon"
                      class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-40 sm:w-full pl-2 p-2.5 -mb-1  h-6"
                      style={{
                        backgroundColor: "#fff",
                        color: "#BEB9B9",
                        fontSize: "6px",
                      }}
                      placeholder="Individual or entity that prepared this document"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  for="email-address-icon"
                  className="text-xl flex flex-col -mb-2"
                  style={{ fontSize: "10px" }}
                >
                  Project Location
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="email-address-icon"
                    class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-60  sm:w-full  pl-2 p-2.5 -mb-1  h-6"
                    style={{
                      backgroundColor: "#fff",
                      color: "#BEB9B9",
                      fontSize: "6px",
                    }}
                    placeholder="Country, sub-national jurisdiction(s)"
                  />
                </div>
                <div className="grid grid-cols-2 sm:gap-3 ">
                  <div className="">
                    <Text
                      className="mt-1 text-xl flex flex-col -mb-2"
                      style={{ fontSize: "10px" }}
                    >
                      Date of Issue
                    </Text>
                    <div class="relative ">
                      <input
                        type="text"
                        id="email-address-icon"
                        class=" border border-gray-300 text-gray-900 text-xs rounded-sm  sm:w-full block w-16 pl-2 p-2.5 -mb-1  h-6"
                        style={{
                          backgroundColor: "#fff",
                          color: "#BEB9B9",
                          fontSize: "6px",
                        }}
                        placeholder="DD-MM-YYYY 
                    of the document issued"
                      />
                    </div>
                  </div>

                  <div className="">
                    <Text
                      className="mt-1 text-xl flex flex-col -mb-2"
                      style={{ fontSize: "10px" }}
                    >
                      Project ID
                    </Text>
                    <div class="relative ">
                      <input
                        type="text"
                        id="email-address-icon"
                        class=" border border-gray-300 text-gray-900 text-xs rounded-sm sm:w-full block w-40 pl-2 p-2.5 -mb-1  h-6"
                        style={{
                          backgroundColor: "#fff",
                          color: "#BEB9B9",
                          fontSize: "6px",
                        }}
                        placeholder="Verra Registry project ID"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  for="email-address-icon"
                  className="text-xl flex flex-col -mb-2"
                  style={{ fontSize: "10px" }}
                >
                  Contact
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="email-address-icon"
                    class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-60 sm:w-full  pl-2 p-2.5  -mb-1  h-6"
                    style={{
                      backgroundColor: "#fff",
                      color: "#BEB9B9",
                      fontSize: "6px",
                    }}
                    placeholder="Contact name, physical address, telephone, email, website"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for="email-address-icon"
                    className=" text-xl flex flex-col -mb-2"
                    style={{ fontSize: "10px" }}
                  >
                    VVB Contact
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="email-address-icon"
                      class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-60  sm:w-full  pl-2 p-2.5 -mb-1  h-6"
                      style={{
                        backgroundColor: "#fff",
                        color: "#BEB9B9",
                        fontSize: "6px",
                      }}
                      placeholder="Organization and contact name with email address and phone number"
                    />
                  </div>
                </div>
                {/* <div className="h-11 w-40">
                <Select options={options}  defaultValue={options[0]} styles={} />
                </div> */}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row sm:flex-wrap w-60 sm:w-full  gap-2">
                <div>
                  <div
                    className="rounded-xl shadow-sm  w-32 h-[114px] ml-20 sm:ml-0 text-center mt-7  items-center sm:mt-4 md:mt-7"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="flex flex-col space-x-3 pt-8 gap-3">
                      <svg
                        width="30"
                        height="31"
                        className="ml-12"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8801 25.7812L22.9201 27.9979L29.0001 23.5646M14.9801 29.8062C11.3401 29.8062 7.72008 29.1354 4.96008 27.7937C0.120078 25.4312 0.120078 21.5812 4.96008 19.2333C10.4601 16.55 19.4801 16.55 24.9801 19.2333M15.3201 13.8521C15.1201 13.8375 14.8801 13.8375 14.6601 13.8521C12.3645 13.7952 10.1894 13.0891 8.59534 11.8833C7.00131 10.6774 6.11356 9.06649 6.12008 7.39166C6.11692 6.54194 6.34379 5.70011 6.78768 4.91444C7.23157 4.12877 7.88376 3.4147 8.70685 2.81317C9.52995 2.21165 10.5078 1.73448 11.5843 1.40904C12.6607 1.0836 13.8147 0.916278 14.9801 0.916665C19.8801 0.916665 23.8601 3.81875 23.8601 7.39166C23.8601 10.8917 20.0601 13.7354 15.3201 13.8521Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <Text style={{ fontSize: "10px" }} className="font-bold">
                        Profile image
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex">
                <div className="flex flex-col mt-20 sm:mt-0">
                  <label
                    for="email-address-icon"
                    className=" text-xl flex flex-col"
                    style={{ fontSize: "7px" }}
                  >
                    Project Titel Goal
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="email-address-icon"
                      class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-40   pl-2 p-2.5   h-6"
                      style={{
                        backgroundColor: "#fff",
                        color: "#BEB9B9",
                        fontSize: "6px",
                      }}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-20 sm:mt-0">
                  <label
                    for="email-address-icon"
                    className=" text-xl flex flex-col"
                    style={{ fontSize: "7px" }}
                  >
                    Contact
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="email-address-icon"
                      class=" border border-gray-300 text-gray-900 text-xs rounded-sm  block w-40  pl-2 p-2.5   h-6"
                      style={{
                        backgroundColor: "#fff",
                        color: "#BEB9B9",
                        fontSize: "6px",
                      }}
                      placeholder="Phone or Website:"
                    />
                  </div>
                </div>
                </div>
              </div>

              {/* <label
                    for="email-address-icon"
                    className=" text-xl flex flex-col"
                    style={{ fontSize: "7px" }}
                  >
                    Contact
                  </label> */}
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class=" border border-gray-300 text-gray-900 text-xs rounded-lg ml-20 sm:ml-0 mt-2  block w-[460px] sm:w-full  p-2.5 pb-24   h-32 "
                  style={{
                    backgroundColor: "#fff",
                    color: "#BEB9B9",
                    fontSize: "6px",
                  }}
                  placeholder="Project Design and Baseline Creation "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between ">
            <div class="relative sm:w-full">
              <input
                type="text"
                id="email-address-icon"
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg mt-2  block w-[260px] sm:w-full pl-2 pb-32  h-40 "
                style={{
                  backgroundColor: "#fff",
                  color: "#BEB9B9",
                  fontSize: "6px",
                }}
                placeholder="Project Design and Baseline Creation "
              />
            </div>
            <div class="relative sm:w-full">
              <input
                type="text"
                id="email-address-icon"
                class=" border border-gray-300 text-gray-900 text-xs rounded-lg mt-2  block w-[260px] sm:w-full  p-2.5 pb-32  h-40 "
                style={{
                  backgroundColor: "#fff",
                  color: "#BEB9B9",
                  fontSize: "6px",
                  placeContent:'flex-start'
                }}
                placeholder="Project Design and Baseline Creation "
              />
            </div>
            <div className="mt-2 flex flex-col sm:w-full">
              <div className="h-10 w-48 sm:w-full rounded-sm" style={{backgroundColor:'#fff'}}>
                <Text className="text-base p-2">Project Milestones</Text>
              </div>
              <div className="h-28 mt-1 w-48 sm:w-full rounded-lg" style={{backgroundColor:'#fff'}}>
              <Text className="text-base p-2"></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
