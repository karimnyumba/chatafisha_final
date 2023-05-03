import { NavBar, Text } from "components";
import React from "react";

function NEWSDETAILSPAGE(props) {
  //use props from the News page to render the specific page content

  return (
    <div
      className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <div className="relative top-0 w-full h-full z-50">
        <NavBar />
      </div>

      <main class="absolute left-0 bottom-0 top-0 w-full h-full z-10">
        <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96">
          <div
            class="absolute left-0 bottom-0 top-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src="images/img_rectangle6_1.png"
            class="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            {/* <a
              href="#"
              class="px-4 py-1 text-gray-200 inline-flex items-center justify-center mb-2"
            >
              ---
            </a> */}
            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
              Join our open house event.
            </h2>
            <div class="flex mt-3">
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

        <div class="px-4 w-4/5 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg  leading-relaxed">
          <div class="border-l-4 border-gray-500 pl-4 text-xl mb-6 italic rounded">
            Chatafisha will be hosting it’s second open house event this year to
            share our.
          </div>
         
          <p class="pb-6"></p>
        </div>
      </main>
    </div>
  );
}

export default NEWSDETAILSPAGE;
