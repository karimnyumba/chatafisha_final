import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Information, Text } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import useFetch from "hooks";
import BlogDescription from "components/BlogDescription";
import ApiErrorDisplay from "components/ApiErrorDisplay";


function NewsCarousel() {
  const navigate = useNavigate()
  const { dispatch } = useGlobalContext()
  const cards = [
    {
      id:1,
      img: "images/voice.png",
      title: "Join our open house event",
      content: "Chatafisha will be hosting it’s second open house event this year to share our"
    },
    {
      id:2,
      img: "images/chatafisha final.00_00_21_23 1.png",
      title: "Rangi Chanya Festival",
      content: "Exciting news! CHATAFISHA is hosting 'RANGI CHANYA'  to drive community impact through a circular economy. "
    },
    {
      id:3,
      img: "images/wasteInitiative.png",
      title: "Waste Collection Initiative",
      content: "Chatafisha and Nipe Fagio are partnering in a waste collection initiative..."
    },
    {
      id:4,
      img: "images/near.jpeg",
      title: "Building on NEAR Protocol",
      content: "As a Decentralized Autonomous Organization (DAO), we are building our platform on..."
    },
  
  ];
  const [blogs, setBlogs] = React.useState(cards);
  const { data, isLoading, error, obtainData } = useFetch()
  React.useEffect(() => {
    let url, method;
    if(!data){
    obtainData(
      (url = 'blog/article_data'),
      (method = 'get')
    )
  }
  else{
    setBlogs(data.data)
  }

  }, [data])



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
    <div className='w-full h-[290px]'>
      {isLoading && (
        <div>
          <Information msg={'Fetching blogs for you!!'} color={'warning'} />
        </div>
      )}
      {error && (
        <ApiErrorDisplay
          errObject={
            new Map([
              [
                'ERR_NETWORK',
                {
                  msg: 'Can\'t fetch blogs because of Network Error, Please check your internet connection!',
                  color: 'danger',
                },
              ],
            ])
          }
          errCode={error.code}
        />
      )}
      <Splide options={options}>
        {blogs.map((card, index) => (
          <SplideSlide
            key={index}
            onClick={() => {
              dispatch({
                type: 'CURRENT_BLOG_ARTICLE',
                payload: {
                  article: card,
                },
              })
              navigate('/news_detail')
            }}
          >
            <div className='relative w-[290PX] sm:ml-[0px] md:ml-[30px]'>
              <img
                src={'http://139.162.249.220:9292/' + card.img}
                className='w-[100%] h-40 mb-[-14px] ml-auto  object-cover z-[1]'
                alt={card.title}
              />
              <div className='w-full bg-black p-[11px] h-30 flex flex-col items-center justify-center '>
                <div
                  className='flex gap-8 pt-2
                '
                >
                  <Text
                    className='font-bold text-white text-left text-xl w-full'
                    variant='h4'
                  >
                    {card.title}
                  </Text>
                  <svg
                    width='14'
                    height='20'
                    className='float-right'
                    viewBox='0 0 14 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.0701 7.57L7.00005 1.5L0.930054 7.57M7.00005 18.5V1.67'
                      stroke='white'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <Text
                  className='text-white pt-1 text-left text-xs '
                  variant='body2'
                >
                  {card.content && (
                    <BlogDescription content={card.content.substring(0, 100)} />
                  )}
                </Text>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export { NewsCarousel };
