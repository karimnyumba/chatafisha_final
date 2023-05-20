import React from "react";

import { Text, Img, Carousel, Information, NavBar } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";

  const HOMEPAGEPage = () => {
  const { user_details} = useGlobalContext()
  const { user_redirect_message } = useGlobalContext()
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne h-[100vh] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_homepage.png')" }}
      >
        <div className='flex flex-col justify-start max-w-[1175px] mx-auto my-[11px] md:px-5 w-full'>
          <NavBar/>
          <div className="mb-4">
            {user_redirect_message && (
              <Information
                msg={user_redirect_message.message}
                color={user_redirect_message.color}
                temp={true}
                clearState={'REMOVE_REDIRECT_MESSAGE'}
              />
            )}
          </div>
          <div>
            <Text
              className='font-medium text-black_900 text-left text-success  w-auto mb-3 text-3xl capitalize'
              as='h2'
              variant='h2'
            >
              {user_details.user_data?.name}
            </Text>
          </div>
          <div className='flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[13px] mt-[43px] w-[95%] md:w-full'>
            <Text
              className='font-medium text-black_900 text-left w-auto'
              as='h4'
              variant='h4'
            >
              Karibu
            </Text>
            <Text
              className='font-bold md:ml-[0] ml-[800px] md:mt-0 mt-2.5 text-black_900 text-left w-auto'
              as='h4'
              variant='h4'
            >
              CHATAFISHA
            </Text>
            <Img
              src='images/img_mainlogo_black_901.svg'
              className='h-8 md:ml-[0] ml-[55px] md:mt-0 mt-[5px] w-auto'
              alt='mainlogo'
            />
          </div>
          <div className='flex flex-col items-center justify-start mt-[5px] w-full'>
            <div className='flex flex-wrap sm:flex-col items-start justify-between w-full md:w-full'>
              <div className='h-[344px] md:h-[354px] mb-2.5 relative w-[49%] md:w-full'>
                <Img
                  src='images/img_rectangle4_344x549.png'
                  className='h-[344px] m-auto object-cover rounded-[16px] w-full'
                  alt='rectangleFour'
                />
                <div className='absolute flex flex-col md:gap-10 gap-[118px] h-max inset-[0] justify-center m-auto w-[85%]'>
                  <Img
                    src="images/img_cut_white_a700.svg"
                    className="h-[51px] md:ml-[390px] ml-[404px] w-auto sm:ml-[190px]"
                    alt="cut"
                  />
                  <Text
                    className='font-semibold mr-[25px] text-left text-white_A700'
                    as='h6'
                    variant='h6'
                  >
                    <>
                      Pata thamani
                      <br />
                      Earn carbon credits through the offsets of plastic waste
                      into usable goods and building materials.
                    </>
                  </Text>
                </div>
              </div>
              <div className='flex flex-wrap items-start justify-start md:mt-0 mt-[17px] w-[48%] md:w-full'>
                <div className='grid grid-cols-4 gap-5 sm:grid-cols-2 md:columns-2 sm:gap-10 items-center justify-between w-full'>
                  <div className='common-pointer bg-black_900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start sm:mt-0 mt-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px]'
                   onClick={() => {
                        navigate('/news_and_updates')
                      }}
                  >
                    <Img
                      src='images/img_plus.svg'
                      className='h-4 mt-0.5 w-4'
                      alt='plus'
                    />
                    <Text
                      className='font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700'
                      variant='body2'
                     
                    >
                      <>
                        News &<br />
                        Updates
                      </>
                    </Text>
                  </div>
                  <div className='common-pointer bg-green_403 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px] '>
                    <Img
                      src='images/img_plus.svg'
                      className='h-4 mt-0.5 w-4'
                      alt='plus_One'
                    />
                    <div className='flex flex-col items-start justify-start mr-1 w-auto md:w-full'>
                      <Text
                        className='font-bold  text-center ml-[10px]  text-white_A700'
                        variant='body2'
                      >
                        Sokoni
                      </Text>
                      <Text
                        className='font-bold text-center ml-[10px]  text-white_A700'
                        variant='body2'
                      >
                        Market place
                      </Text>
                    </div>
                  </div>

                  <div className='common-pointer bg-indigo_A200 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]'>
                    <Img
                      src='images/img_plus.svg'
                      className='h-4 w-4'
                      alt='plus_Two'
                    />
                    <Text
                      className='font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700'
                      variant='body2'
                    >
                      <>
                        Tupe
                        <br />
                        Support
                      </>
                    </Text>
                  </div>
                  <div className='common-pointer bg-blue_400 flex sm:flex-1 flex-col gap-[59px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]'>
                    <Img
                      src='images/img_plus.svg'
                      className='h-4 md:ml-[0] ml-[85px] w-4'
                      alt='plus_Three'
                    />
                    <Text
                      className='font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700'
                      variant='body2'
                    >
                      Tufahamu
                    </Text>
                  </div>
                </div>
                <Text
                  className='font-bold ml-0.5 md:ml-[0] mt-[43px] text-black_900 text-left'
                  as='h4'
                  variant='h4'
                >
                  <>
                    Get all the latest news happening around the
                    <br />
                    Chatazen community.
                  </>
                </Text>
                <Text
                  className='font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic text-gray_601 text-left'
                  as='h4'
                  variant='h4'
                >
                  <>
                    For the first time we have created an application that{' '}
                    <br />
                    will allow you to impact real change while earning
                    <br />
                    carbon credits. Our platform features plastic collectors and
                    recycling projects
                  </>
                </Text>
              </div>
            </div>
            <div className='flex flex-row md:gap-10 items-end justify-between mt-[22px] w-[99%] md:w-full'>
              <Text
                className='text-black_900 text-left w-auto'
                as='h3'
                variant='h3'
              >
                PROJECTS
              </Text>
              <div className='flex flex-row gap-2 items-center justify-between my-1 w-[16%] sm:w-[35%]'>
                <Text
                  className='font-normal not-italic text-black_900 text-left w-auto h-auto '
                  as='h6'
                  variant='h6'
                >
                  View All
                </Text>
                <Img
                  src='images/img_arrowright.svg'
                  className='common-pointer h-auto w-auto'
                  alt='arrowright'
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-start mt-[15px] shadow-bs w-full'>
              <div className='flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 pr-[25px] w-full'>
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HOMEPAGEPage;