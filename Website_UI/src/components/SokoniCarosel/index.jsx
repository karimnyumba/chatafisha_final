import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Img, Information, Text } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import {Swiper, SwiperSlide} from 'swiper/react'
import TimeUpdate from "components/TimeUpdate";
import useFetch from "hooks";
function SokoniCarosel() {
  const navigate = useNavigate()
  const { dispatch, setPickerList, user_details, isPickerUpdated, formatDate } = useGlobalContext()
  const { data, isLoading, error, obtainData } = useFetch()
  React.useEffect(
    ()=>{
     
  obtainData(
    'user/picker_list',
    'get',
    {},
    {
      headers: {
       
      },
    }
  )
    }, [user_details, isPickerUpdated]
  )
  if (data){
    data.data.sort((a, b)=> new Date(b.latest_collection_date) -  new Date(a.latest_collection_date));
   setPickerList(data.data)
  }
  function formatNumberWithCommas(number) {
    // Convert the number to a string and split it into parts
    const parts = number.toString().split('.')

    // Format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // Join the integer and decimal parts (if any)
    return parts.join('.')
  }



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
  const breakpoints = {
    665: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      
    },
    1280: {
      slidesPerView: 3,
    },
    1536: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  }
  const carbonOffsetted = (total_collection)=>{
    if(!total_collection) return 0;
    return (total_collection/1000).toFixed(2);
  }
  
  const nullWrapper = (amount)=>{
    return (amount) ? amount: 0;
  }
  const calculatePrice = (total_collection) => {
    return formatNumberWithCommas((nullWrapper(carbonOffsetted(total_collection)) * 600000))
  }
  return (
    <div className='w-full'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        
        breakpoints={breakpoints}
        
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
       
      >
        {data &&
          data.data.map((card, index) => {
            const date = formatDate(card.latest_collection_date)
            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative w-[375px] h-[300px] cursor-pointer   rounded-xl overflow-x-visible bg-green-500  mx-auto mb-5 py-1`}
                  style={{ backgroundColor: '#38C18C' }}
                  onClick={() => {
                    dispatch({
                      type: 'CURRENT_CREDIT_DETAIL',
                      payload: {
                        credit: card,
                      },
                    })
                    navigate(`/sokoni_details/${card.id}`)
                  }}
                >
                  <div className='mt-4 ml-2 flex justify-around '>
                    <div className='flex'>
                      <div class='flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white'>
                        <Img
                          src={card.profile_img}
                          className='w-16 h-16 rounded-full'
                        />
                      </div>

                      <div className='pl-2 '>
                        <Text
                          className='  text-sm text-capitalize'
                          style={{ color: '#F8F8F8' }}
                          variant='body1'
                        >
                          {card.firstname + ' ' + card.last_name}
                          <br />
                          ID: {card.id}
                          <br />
                        </Text>

                        <Text
                          className='text-sm'
                          style={{ color: '#D9D9D9', fontSize: '15px' }}
                        >
                          <i class='fas fa-map-marker-alt'></i> {card.location}
                          <br />
                          <i class='fas fa-phone-alt me-1'></i>
                          {card.phone_no}
                        </Text>
                      </div>
                    </div>
                    <div
                      className='inline-block font-bold text-xs rounded-full px-3 pt-1 h-6 justify-center align-middle'
                      style={{ backgroundColor: '#5271FF' }}
                    >
                      <i class='fas fa-recycle   text-white'></i>
                    </div>
                  </div>
                  <div
                    className='absolute top-28 w-full h-[190px] p-[11px] rounded-xl flex flex-col items-center justify-center'
                    style={{ backgroundColor: '#D8DFE0' }}
                  >
                    <div className='flex space-x-6 mb-4'>
                      <div className='flex flex-col'>
                        <div
                          className='inline-block fw-bold text-xs text-nowrap rounded-full pt-1 px-1 h-6 justify-center align-middle'
                          style={{
                            backgroundColor: '#D9D9D9',
                            fontSize: '10px',
                          }}
                        >
                          Plastic collected{' '}
                        </div>
                        <Text className='text-center text-lg font-[600]'>
                          {nullWrapper(card.latest)}
                        </Text>
                      </div>
                      <div className='flex flex-col'>
                        <div
                          className='inline-block fw-bold text-xs text-nowrap rounded-full px-3 pt-1 h-6 justify-center align-middle'
                          style={{
                            backgroundColor: '#5271FF',
                            fontSize: '10px',
                          }}
                        >
                          Total collected
                        </div>
                        <Text className='text-center  font-[600] text-lg'>
                          {nullWrapper(card.total_collection)}
                        </Text>
                      </div>
                      <div className='flex flex-col'>
                        <div
                          className='inline-block fw-bold text-nowrap text-xs rounded-full px-3 pt-1 h-6 justify-center align-middle'
                          style={{
                            backgroundColor: '#6AB148',
                            fontSize: '10px',
                          }}
                        >
                          Carbon offset
                        </div>
                        <Text className='text-center  font-[600] text-lg'>
                          {nullWrapper(carbonOffsetted(card.total_collection))}
                        </Text>
                      </div>
                    </div>
                    <div className='rounded-xl shadow-sm bg-white  w-72 h-24 flex justify-around '>
                      <div className='flex flex-col space-y-1 pt-2'>
                        <Text
                          className=''
                          style={{ fontSize: '11px', fontWeight: '500' }}
                        >
                          Amount Selling
                        </Text>

                        <Text style={{ color: '#4CAF50', fontSize: '11px' }}>
                          1 CC = 1,000 KG
                        </Text>

                        <Text style={{ fontSize: '29px' }}>
                          {nullWrapper(carbonOffsetted(card.total_collection))}
                        </Text>
                        <Text style={{ color: '#4CAF50', fontSize: '9px' }}>
                          Seen:{' '}
                          <TimeUpdate time={card.latest_collection_date} />
                        </Text>
                      </div>

                      <div className='flex flex-col pt-2  space-y-1'>
                        <svg
                          className='ml-6'
                          width='58'
                          height='11'
                          viewBox='0 0 58 11'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1 9.03972L3.36897 7.91614C4.87013 7.20415 6.65317 7.47421 7.87616 8.59881V8.59881C9.42482 10.0229 11.8027 10.0348 13.3656 8.62641L15.0479 7.11039C15.3222 6.86321 15.6267 6.65176 15.9541 6.48106L18.0609 5.38257C19.2943 4.73951 20.76 4.72125 22.009 5.33339L22.9498 5.7945C24.1644 6.38977 25.586 6.38977 26.8006 5.7945L29.1241 4.65576C29.5243 4.45963 29.8922 4.20349 30.215 3.89622L32.3373 1.87618C33.6335 0.642465 35.5503 0.322471 37.1769 1.06825L38.6171 1.72852C39.0926 1.94657 39.5253 2.24815 39.8944 2.61894L43.4698 6.21077C43.8173 6.55984 44.2212 6.84773 44.6646 7.06229L48.2443 8.79478C48.5803 8.95741 48.9358 9.07636 49.302 9.14873L52.3456 9.75021C53.044 9.88822 53.7655 9.85374 54.4475 9.64974L57 8.88628'
                            stroke='#4CAF50'
                            stroke-width='0.875'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>

                        <Text
                          style={{ color: '#4CAF50', fontSize: '15px' }}
                          className='font-bold'
                        >
                          Price
                        </Text>
                        <Text
                          style={{ color: '#4CAF50', fontSize: '15px' }}
                          className='font-bold'
                        >
                          TZS {calculatePrice(card.total_collection)}
                        </Text>

                        <Button
                          className=' border-2 rounded-lg text-xs  text-white hover:bg-black w-24 h-5'
                          style={{ backgroundColor: '#706868' }}
                        >
                          {' '}
                          BUY
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default SokoniCarosel;
