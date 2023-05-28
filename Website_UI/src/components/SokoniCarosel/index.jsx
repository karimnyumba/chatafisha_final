import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button, Img, Information, Text } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import Avatar from "components/adminComponents/Avatar";
import Badge from "components/adminComponents/Badge";
import Card from "components/adminComponents/Card";

function SokoniCarosel() {
  const navigate = useNavigate()
  const { dispatch } = useGlobalContext()

  const cards = [
    {
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
    },
    {
      id: 18845,
      name: "Janneth Hulingo",
      loc: " Mbezi, Dar es salaam",
      avatar: "images/Screen Shot 2022-12-14 at 11.png",
      avarage_daily: "70kg",
      total_collected: "8000kg",
      sold: "620kg",
      amount_selling: "280kg",
      title: "Join our open house event",
      content:
        "Chatafisha will be hosting it’s second open house event this year to share our",
    },
    {
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
    },
    {
      id: 12354,
      name: "Nipe Fagio",
      loc: " Mbezi, Dar es salaam",
      avatar: "images/img_rectangle6_2.png",
      avarage_daily: "800kg",
      total_collected: "2Tn",
      sold: "1.7Tn",
      amount_selling: "800kg",
      title: "Join our open house event",
      content:
        "Chatafisha will be hosting it’s second open house event this year to share our",
    },
  ];
  const options = {
    type: "carousel",
    perPage: 3,
    gap: "1rem",
    rewind: true,
    pagination: false,
    arrows: {
      prev: "<button class='splide__arrow splide__arrow--prev'>Prev</button>",
      next: "<button class='splide__arrow splide__arrow--next'>Next</button>",
    },
    autoplay: true,
    interval: 3000,
    loop: true,

    breakpoints: {
      665: {
        perPage: 1,
        gap: "0.5rem",
        autoplay: true,
        interval: 3000,
      },
      768: {
        perPage: 2,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
      990: {
        perPage: 2,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
      1024: {
        perPage: 3,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
      1280: {
        perPage: 3,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
      1536: {
        perPage: 3,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
      1920: {
        perPage: 3,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
      },
    },
  };
  return (
    <div className="w-full">
      <Splide options={options}>
        {cards.map((card, index) => (
          <SplideSlide key={index}>
            <div
              className="relative w-[330px] h-[300px] rounded-xl overflow-x-visible bg-green-500  float-left"
              style={{ backgroundColor: "#38C18C" }}
              onClick={() => {
                dispatch({
                  type: 'CURRENT_CREDIT_DETAIL',
                  payload: {
                    credit: card,
                  },
                })
                navigate('/sokoni_detail')
              }}
            >
              <div className="mt-4 ml-2 flex justify-around ">
                <div className="flex">
                <div class="flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
              <Img src={card.avatar} className="w-16 h-16 rounded-full" />
              </div>
                  
                  <div className="pl-2 ">
                    <Text
                      className="  text-sm"
                      style={{ color: "#F8F8F8" }}
                      variant="body1"
                    >
                      {card.name}
                      <br />
                      ID: {card.id}
                      <br />
                    </Text>

                    <Text
                      className="text-sm"
                      style={{ color: "#D9D9D9", fontSize: "7.4px" }}
                    >
                      <i class="fas fa-map-marker-alt"></i> {card.loc}
                      <br />
                      <Button className=" border-2 rounded-lg text-xs px-2 text-white hover:bg-green-400">
                        {" "}
                        contact
                      </Button>
                    </Text>
                  </div>
                </div>
                <div
                  className="inline-block font-bold text-xs rounded-full px-3 pt-1 h-6 justify-center align-middle"
                  style={{ backgroundColor: "#5271FF" }}
                >
                  <i class="fas fa-recycle   text-white"></i>
                </div>
              </div>
              <div
                className="absolute top-28 w-full h-[190px] p-[11px] rounded-xl flex flex-col items-center justify-center"
                style={{ backgroundColor: "#D8DFE0" }}
              >
                <div className="flex space-x-6 mb-4">
                  <div className="flex flex-col">
                    <div
                      className="inline-block rounded-full pt-1 px-1 h-6 justify-center align-middle"
                      style={{ backgroundColor: "#D9D9D9", fontSize: "8px" }}
                    >
                      <Text className="text-xs"> Avarage daily </Text>
                    </div>
                    <Text className="text-center text-xs font-normal">
                      {card.avarage_daily}
                    </Text>
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="inline-block font-bold text-xs rounded-full px-3 pt-1 h-6 justify-center align-middle"
                      style={{ backgroundColor: "#5271FF", fontSize: "8px" }}
                    >
                      Total collected
                    </div>
                    <Text className="text-center text-xs font-normal ">
                      {card.total_collected}
                    </Text>
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="inline-block font-bold text-xs rounded-full px-3 pt-1 h-6 justify-center align-middle"
                      style={{ backgroundColor: "#6AB148", fontSize: "8px" }}
                    >
                      SOLD
                    </div>
                    <Text className="text-center text-xs font-normal ">
                      {card.sold}
                    </Text>
                  </div>
                </div>
                <div className="rounded-xl shadow-sm bg-white  w-72 h-24 flex justify-around ">
                  <div className="flex flex-col space-y-1 pt-2">
                    <Text className="" style={{ fontSize: "8px" }}>
                      Amount Selling
                    </Text>
                  
                    <Text style={{ color: "#4CAF50", fontSize: "8px" }}>
                      +5% of target
                    </Text>
                    
                    <Text style={{ fontSize: "29px" }}>
                      {card.amount_selling}
                    </Text>
                  </div>
                  <div className="flex flex-col pt-2  space-y-1">
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
                    
                    <Text style={{ color: "#4CAF50", fontSize: "15px" }} className="font-bold">
                      Selling 1kg
                    </Text>
                    <Text style={{ color: "#4CAF50", fontSize: "15px" }} className="font-bold">
                      USD $1
                    </Text>
                   
                    <Button
                      className=" border-2 rounded-lg text-xs  text-white hover:bg-black w-24 h-5"
                      style={{ backgroundColor: "#706868" }}
                    >
                      {" "}
                      BUY
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-52 border-r-2 mr-5 mt-5"></div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default SokoniCarosel;
