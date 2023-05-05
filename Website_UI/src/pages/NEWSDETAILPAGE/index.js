import { NavBar, Text, NewsCarousel } from "components";
import React from "react";
import { useGlobalContext } from "context";
import { useNavigate } from "react-router-dom";

function NEWSDETAILSPAGE(props) {
  const { article } = useGlobalContext();
  const navigate = useNavigate()

  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <div className="w-full">
        <NavBar />
      </div>
      <div className="ml-[-75%] my-2">
        <svg
          width="70"
          height="30"
          className="common-pointer  float-left mt-1 mr-8"
          viewBox="0 0 74 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate('/news_and_updates') }
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

      <main class=" flex flex-row justify-around gap-1 sm:flex-wrap w-full sm:w-full mx-auto   ">
        <div class="mb-4 md:mb-0 w-full   relative  h-72">
          <div
            class="absolute left-0 bottom-0 top-0 w-3/4 sm:w-full h-full z-10 rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.6))",
            }}
          ></div>
          <img
            src={article?.article.imgUrl}
            class="absolute left-0 top-0 w-3/4 sm:w-full h-full z-0 object-cover rounded-lg"
          />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <div class="flex mt-3 ">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p class="font-semibold text-gray-200 text-sm">
                  {" "}
                  CHATAFISHA admin{" "}
                </p>
                <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>

        <div class="px-2 w-4/5 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto sm:mx-1 text-lg  leading-relaxed">
          <div class="font-bold border-l-4 border-gray-500 text-black pl-4 text-xl mb-6 italic rounded">
            {article?.article.title}
          </div>

          <p class="pb-6">{article?.article.description}</p>
        </div>
      </main>

      <div className="flex flex-col items-center justify-start mt-[50px] shadow-bs w-full">
        <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 sm:ml-[50px]  w-full ">
          <NewsCarousel />
        </div>
      </div>
    </div>
  );
}

export default NEWSDETAILSPAGE;
