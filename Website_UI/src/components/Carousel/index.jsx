import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Text } from "components";

function Carousel() {
  const cards = [
    {
      imgUrl: "images/img_rectangle6.png",
      title: "FUCHA BINS",
    },
    {
      imgUrl: "images/img_rectangle6_160x327.png",
      title: "RANGI CHANYA",
    },
    {
      imgUrl: "images/img_rectangle6_160x327.png",
      title: "RANGI CHANYA",
    },
    {
      imgUrl: "images/img_rectangle6_160x327.png",
      title: "RANGI CHANYA",
    },
    {
      imgUrl: "images/img_rectangle6_1.png",
      title: "ECO BRICKS",
    },
    {
      imgUrl: "images/img_rectangle6_2.png",
      title: "NIPE FAGIO",
    },
    {
      imgUrl: "images/img_rectangle6_2.png",
      title: "NIPE FAGIO",
    },
    {
      imgUrl: "images/img_rectangle6_2.png",
      title: "NIPE FAGIO",
    },
  ];

  const options = {
    type: "carousel",
    perPage: 6,
    gap: "1rem",
    rewind: true,
    pagination: false,
    arrows: {
      prev: "<button class='splide__arrow splide__arrow--prev'>Prev</button>",
      next: "<button class='splide__arrow splide__arrow--next'>Next</button>",
    },
    autoplay : true,
    interval : 3000,
    loop : true,

    breakpoints: {
      640: {
        perPage: 1,
        gap: "0.5rem",
        autoplay : true,
    interval : 3000,
      },
      768: {
        perPage: 2,
        gap: "1rem",
        autoplay : true,
    interval : 3000,
      },
      1024: {
        perPage: 3,
        gap: "1rem",
        autoplay : true,
    interval : 3000,
      },
      1280: {
        perPage: 4,
        gap: "1rem",
        autoplay : true,
    interval : 3000,
      },
      1536: {
        perPage: 5,
        gap: "1rem",
        autoplay : true,
    interval : 3000,
      },
      1920: {
        perPage: 6,
        gap: "1rem",
        autoplay : true,
    interval : 3000,
      },
    },
  };

  return (
    <div className="w-full">
      <Splide options={options}>
        {cards.map((card, index) => (
          <SplideSlide key={index}>
            <div className="relative w-full h-[203px]">
              <img
                src={card.imgUrl}
                className="w-[85%] h-40 mb-[-14px] ml-auto rounded-[10px] object-cover z-[1]"
                alt={card.title}
              />
              <div className="w-full bg-white_A700 p-[11px] flex flex-col items-center justify-center">
                <Text
                  className="text-black_900 text-center w-full"
                  variant="body1"
                >
                  {card.title}
                </Text>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export { Carousel };
