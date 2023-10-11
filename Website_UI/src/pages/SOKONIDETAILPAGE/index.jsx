import React, {useState} from "react";
import { NavBar, Text, Img, Loading, Information } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import Button from "components/adminComponents/Button";
import Avatar from "components/adminComponents/Avatar";
import AddCollection from "./AddCollectionModal";
import HistoryModal from "./HistoryModal";
import { useParams } from "react-router-dom";
import useFetch from "hooks";
import TimeUpdate from "components/TimeUpdate";
import { backend_url } from "api";
function SokoniDetail() {
  const navigate = useNavigate();
  const {credit, user_details, isCollectionAdded} = useGlobalContext();
  console.log(isCollectionAdded)

  const [modalOpen, setModalOpen] = useState(false);
  const [HistorymodalOpen, setHistoryModalOpen] = useState(false);
  const [message,setMessage]= useState(null);
   function formatNumberWithCommas(number) {
     // Convert the number to a string and split it into parts
     const parts = number.toString().split('.')

     // Format the integer part with commas
     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

     // Join the integer and decimal parts (if any)
     return parts.join('.')
   }

  const calculatePrice = (total_collection) => {
    return formatNumberWithCommas(
     Math.round( nullWrapper(carbonOffsetted(total_collection)) * 600000)
    )
  }

  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }
  const { id } = useParams();
  const {obtainData, data, isLoading, error} = useFetch()

  React.useEffect(() => {
    
    obtainData(`user/specific_picker/${id}`,'get' ,{}, {
      headers:{
      
      }
    })
  
  }, [id, user_details]);
  const api = 'https://service-chatafishabackend.onrender.com/';
  const carbonOffsetted = (total_collection) => {
      return (total_collection / 1000).toFixed(2)
  }
  const amountEarned = (carbonOffset)=>{
    return (carbonOffset * 1000).toFixed(1)
  }
  if(error){
    return (
      <div className='d-flex justify-content-center my-auto text-danger'>
        <h4>Oops there is an error!</h4>
      </div>
    )
  }
  if(isLoading){
    return <Loading/>
  }
   function nullWrapper(amount) {
     return amount ? amount : 0
   }
   const isValidator =
     user_details &&
     user_details?.user_data &&
     user_details.user_data.role_id === 'Validator'
  const tempAmount = (data && data.data[0].id===isCollectionAdded.id) ? isCollectionAdded.amount:0 
// bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[800px] md:h-[1200px] sm:h-[1200px] items-center justify-start mx-auto p-[38px] sm:px-5 w-full
  return (
    <>
      {data && (
        <div
          className='bg-cover bg-repeat bg-white_A700 flex flex-col font-syne  items-center justify-start mx-auto p-[38px] py-4 sm:px-5 w-full '
          style={{ backgroundImage: "url('/images/img_homepage.png')" }}
        >
          <NavBar />

          <div className='flex flex-col ml-[-40%]  sm:ml-0'>
            <div className='flex justify-between '>
              <svg
                width='70'
                height='50'
                className='common-pointer mt-4 mr-6'
                viewBox='0 0 74 54'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={() => navigate('/market_place')}
              >
                <path
                  d='M26.7313 1.61938L1.53076 26.8199L26.7313 52.0205M72.1089 26.8199H2.23654'
                  stroke='black'
                  stroke-width='2.83929'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <Text
                className='font-bold md:ml-[0] md:mt-0 mt-0.5 text-dark text-left w-auto'
                as='h2'
                variant='h2'
              >
                <span
                  className='decoration-solid'
                  style={{
                    color: 'white',
                    fontSize: '35px',
                    fontFamily: 'syne',
                    WebkitTextStroke: '1px black',
                  }}
                >
                  {' '}
                  Sokoni
                </span>
                <br />
                <strong className='' style={{ fontSize: '20px' }}>
                  verified Plastic off-set carbon credits
                </strong>
              </Text>
            </div>
            <Text
              className='font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic  text-left sm:text-sm'
              as='h6'
              variant='h6'
            >
              <strong>
                +Impact real change while earning carbon credits
                <br />
                our platform features{' '}
                <span className='text-green_403'>verified </span>
                plastic collectors
                <br />
                and recycling projects
              </strong>
            </Text>
          </div>
          <div className='flex flex-row md:gap-10 items-end justify-between mt-[22px] w-[73%] md:w-full '>
            <div className=' inline-flex space-x-2 '>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.3333 6.26665V1.73331C13.3333 0.733313 12.9067 0.333313 11.8467 0.333313H9.15334C8.09334 0.333313 7.66667 0.733313 7.66667 1.73331V6.26665C7.66667 7.26665 8.09334 7.66665 9.15334 7.66665H11.8467C12.9067 7.66665 13.3333 7.26665 13.3333 6.26665ZM6.33334 7.73331V12.2666C6.33334 13.2666 5.90667 13.6666 4.84667 13.6666H2.15334C1.09334 13.6666 0.666672 13.2666 0.666672 12.2666V7.73331C0.666672 6.73331 1.09334 6.33331 2.15334 6.33331H4.84667C5.90667 6.33331 6.33334 6.73331 6.33334 7.73331ZM13.3333 12.2666V10.4C13.3333 9.39998 12.9067 8.99998 11.8467 8.99998H9.15334C8.09334 8.99998 7.66667 9.39998 7.66667 10.4V12.2666C7.66667 13.2666 8.09334 13.6666 9.15334 13.6666H11.8467C12.9067 13.6666 13.3333 13.2666 13.3333 12.2666ZM6.33334 3.59998V1.73331C6.33334 0.733313 5.90667 0.333313 4.84667 0.333313H2.15334C1.09334 0.333313 0.666672 0.733313 0.666672 1.73331V3.59998C0.666672 4.59998 1.09334 4.99998 2.15334 4.99998H4.84667C5.90667 4.99998 6.33334 4.59998 6.33334 3.59998Z'
                  fill='black'
                />
              </svg>

              <Text
                className='text-black_900 text-left w-auto'
                as='h3'
                variant='body1'
              >
                Credit Detail
              </Text>
              <svg
                className='mt-2'
                width='146'
                height='1'
                viewBox='0 0 146 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='4.37114e-08'
                  y1='0.5'
                  x2='146'
                  y2='0.500013'
                  stroke='black'
                />
              </svg>
            </div>
          </div>
          <div
            className={`relative w-[80%] ${isValidator ? 'h-[300px]': ''}   sm:w-full rounded-xl overflow-x-visible ${
              isValidator ? 'bg-green-500' : ''
            }    float-left `}
            style={{ backgroundColor: isValidator ? 'bg-green-500' : '' }}
          >
            {isValidator && (
              <div className='mt-4 ml-2 flex flex-wrap justify-between px-8 '>
                {isValidator && (
                  <div className='flex'>
                    <div class='flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white'>
                      <Img
                        src={`${backend_url}${data && data.data[0].profile_img}`}
                        className=' w-20 h-20 rounded-full'
                        crossOrigin='anonymous'
                      />
                    </div>
                    <div className='pl-2 mt-2'>
                      <Text
                        className='  text-sm text-capitalize'
                        style={{ color: '#F8F8F8', fontSize: '20px' }}
                        variant='body1'
                      >
                        {data &&
                          data.data[0].firstname + ' ' + data.data[0].lastname}
                        <br />
                        ID: {data && data.data[0].id}
                        <br />
                      </Text>

                      <Text
                        className='text-sm'
                        style={{ color: '#D9D9D9', fontSize: '15px' }}
                      >
                        <i class='fas fa-map-marker-alt'></i>{' '}
                        {data && data.data[0].location}
                        <br />
                        <i class='fas fa-phone-alt me-1'></i>
                        {data && data.data[0].phone_number}
                        <div className='d-block'>
                          <i className='fas fa-eye me-1 text-primary'></i>
                          {isCollectionAdded&&
                          <TimeUpdate
                            time={
                              tempAmount=== 0
                                ? data && data.data[0].latest_collection_date
                                : Date.now()
                            }
                            
                          />
                          }
                        </div>
                      </Text>
                    </div>
                  </div>
                )}
                <div className='sm:mt-[-20px] '>
                  {user_details &&
                    user_details?.user_data &&
                    user_details.user_data.role_id === 'Validator' && (
                      <Button
                        className=' border-2 rounded-lg  text-xs px-1 mt-4  text-white bg-transparent hover:bg-green-400 '
                        onClick={() => {
                          openModal()
                        }}
                      >
                        {' '}
                        Collection
                        {/* <i className="fa fa-plus mt-1 ml-2"/> */}
                      </Button>
                    )}
                  <Button
                    className=' border-2 rounded-lg text-xs px-1 mt-4  text-white bg-transparent hover:bg-green-400'
                    onClick={() => {
                      setHistoryModalOpen(true)
                    }}
                  >
                    {' '}
                    History
                    {/* <i className="fa fa-plus mt-1 ml-2"/> */}
                  </Button>
                </div>
              </div>
            )}
            <div
              className={
                isValidator
                  ? 'absolute top-[58%] p-[10px] w-full h-auto  rounded-3xl flex flex-wrap items-center justify-around'
                  : ''
              }
              style={{
                backgroundColor: isValidator ? '#D8DFE0' : '',
              }}
            >
              {isValidator && (
                <>
                  <div className='flex flex-col space-x-4 mb-4'>
                    <div className='flex flex-col ml-5 '>
                      <div
                        className=' inline-block  text-center rounded-full pt-1  h-7 w-32 justify-center align-middle   '
                        style={{
                          backgroundColor: '#D9D9D9',
                          fontSize: '13px',
                        }}
                      >
                        Avarage daily
                      </div>
                      <Text className='text-center text-2xl  font-normal'>
                        {data &&
                          isCollectionAdded &&
                         tempAmount  ||
                          nullWrapper(data.data[0].latest_collection)}{' '}
                        Kg
                      </Text>
                    </div>
                    <div className='flex flex-col'>
                      <div
                        className=' inline-block  text-center rounded-full pt-1  h-7 w-32 justify-center align-middle  '
                        style={{
                          backgroundColor: '#5271FF',
                          fontSize: '13px',
                        }}
                      >
                        Total collected
                      </div>
                      <Text className='text-center text-2xl my-2 font-normal '>
                        
                          {
                          (nullWrapper(data.data[0].amount_col_kg) +
                            tempAmount)}
                        Kg
                      </Text>
                    </div>
                    <div className='flex flex-col'>
                      <div
                        className='  inline-block  text-center rounded-full pt-1  h-7 w-32 justify-center align-middle   '
                        style={{
                          backgroundColor: '#6AB148',
                          fontSize: '13px',
                        }}
                      >
                        SOLD
                      </div>
                      <Text className='text-center text-2xl font-normal '>
                        0 Kg
                      </Text>
                    </div>
                    <div className='flex flex-col my-3'>
                      <div
                        className='  inline-block  text-center rounded-full pt-1  h-7 w-32 justify-center align-middle   '
                        style={{
                          backgroundColor: '#6AB148',
                          fontSize: '13px',
                        }}
                      >
                        Carbon Offset
                      </div>
                      <Text className='text-center text-2xl font-normal '>
                        {data &&
                          
                          nullWrapper(
                            carbonOffsetted(
                              data.data[0].amount_col_kg +
                                tempAmount
                            )
                          )}
                      </Text>
                    </div>
                  </div>
                  <div className='rounded-xl shadow-sm bg-white  w-96  h-[200px] mx-auto flex  justify-around '>
                    <div className='flex flex-col space-y-3 pt-2 pl-2'>
                      <div className='flex flex-col space-y-1 pt-2'>
                        <Text
                          className=''
                          style={{ fontSize: '11px', fontWeight: '500' }}
                        >
                          Amount Selling
                        </Text>

                        <Text style={{ color: '#4CAF50', fontSize: '10px' }}>
                          +5% of target
                        </Text>

                        <Text style={{ fontSize: '29px' }}>
                          {credit?.credit.amount_selling}
                        </Text>
                      </div>
                      <Text style={{ fontSize: '11px', color: '#5271FF' }}>
                        Type of plastic collected
                      </Text>
                      <div className='flex space-x-1'>
                        <Text
                          style={{ fontSize: '11px' }}
                          className='flex flex-col'
                        >
                          WCC
                          <span
                            style={{ fontSize: '9px', fontWeight: '500' }}
                            className=''
                          >
                            waste collected credit
                          </span>
                          <span style={{ fontSize: '22px', marginTop: '6px' }}>
                            71kg
                          </span>
                        </Text>
                        <div className='h-9 border-r-2'></div>
                        <Text
                          style={{ fontSize: '11px' }}
                          className='flex flex-col'
                        >
                          WRC
                          <span style={{ fontSize: '9px', fontWeight: '500' }}>
                            waste collected credit
                          </span>
                          <span style={{ fontSize: '22px', marginTop: '6px' }}>
                            71kg
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className='flex flex-col pt-2 ps-2 space-y-1'>
                      <div className='flex  mt-2'>
                        <div
                          className=' font-bold text-xs rounded-full px-4 pt-1 mt-3 h-6 justify-center align-middle'
                          style={{ backgroundColor: '#5271FF' }}
                        >
                          <i class='fas fa-recycle   text-white'></i>
                        </div>
                        <div className='flex flex-col space-x-3'>
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
                            Selling 1kg
                          </Text>
                          <Text
                            style={{ color: '#4CAF50', fontSize: '15px' }}
                            className='font-bold'
                          >
                            USD $1
                          </Text>
                        </div>
                      </div>
                      <div>
                        <button
                          className='ml-1  mr-1 rounded-lg text-xs w-20 h-12 mt-4 text-white  hover:bg-black-400'
                          style={{ backgroundColor: '#9A9292' }}
                        >
                          {' '}
                          Weight
                        </button>
                        <button
                          className=' rounded-lg text-xs  w-20 h-12  mt-4 text-white  hover:bg-green-400'
                          style={{ backgroundColor: '#90E5A8' }}
                        >
                          {' '}
                          Amount
                        </button>
                      </div>

                      <button className=' border-2 rounded-lg text-xs w-36 bg-transparent   hover:bg-gray-400  h-9 m-3'>
                        {' '}
                        BUY
                      </button>
                    </div>
                  </div>
                </>
              )}
              <div
                className={`rounded-xl shadow-sm  w-80 h-[${
                  isValidator ? '310px' : '480px'
                }] text-center items-center mx-auto  sm:mt-4 md:mt-7`}
                style={{ backgroundColor: 'rgb(240, 238, 228)' }}
              >
                {!isValidator && (
                  <div className='flex justify-between mx-2'>
                    <div class='flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full '>
                      <Img
                        src={`${backend_url}${data && data.data[0].profile_img}`}
                        crossOrigin='anonymous'
                        className=' w-20 h-20 rounded-full'
                      />
                    </div>
                    <div className='pl-2 mt-2 ms-4 text-left'>
                      <Text
                        className='  text-sm text-capitalize'
                        style={{ fontSize: '15px' }}
                        variant='body1'
                      >
                        {data &&
                          data.data[0].firstname + ' ' + data.data[0].lastname}
                        <br />
                        ID: {data && data.data[0].id}
                        <br />
                      </Text>

                      <Text className='text-sm' style={{ fontSize: '15px' }}>
                        <i class='fas fa-map-marker-alt'></i>{' '}
                        {data && data.data[0].location}
                        <br />
                        <i class='fas fa-phone-alt me-1 '></i>
                        <div className=' d-inline-block font-medium'>
                          {data && data.data[0].phone_number}
                        </div>
                        <div className='d-block'>
                          <i className='fas fa-eye me-1 text-primary'></i>
                          <TimeUpdate
                            time={
                              tempAmount === 0
                                ? data && data.data[0].latest_collection_date
                                : new Date().toString()
                            }
                          />
                        </div>
                      </Text>
                    </div>
                  </div>
                )}
                <div className='flex justify-around  '>
                  <div className='flex flex-row space-x-16 pt-6'>
                    <div className='flex flex-col space-y-2'>
                      <div
                        className='inline-block  text-left rounded-full px-3 pt-1 h-4 w-27 justify-center align-middle '
                        style={{ backgroundColor: '#86F3E0', fontSize: '6px' }}
                      >
                        <Text
                          className='flex flex-col my-auto text-md fw-bolder '
                          style={{ color: '', fontSize: '8px' }}
                          variant='body1'
                        >
                          <span>Funds Commited</span>
                        </Text>
                      </div>
                      <Text
                        className='font-bold'
                        style={{ fontSize: '21px' }}
                        variant='body1'
                      >
                        TZS{' '}
                        {data &&
                          isCollectionAdded &&
                          nullWrapper(
                            calculatePrice(
                              data.data[0].amount_col_kg +
                                tempAmount
                            )
                          )}
                      </Text>
                    </div>
                    <div className='flex flex-col space-y-2'>
                      <div
                        className='inline-block  text-center rounded-full px-3 pt-1 h-5 w-28 fw-bold justify-center align-middle'
                        style={{ backgroundColor: '#90E5A8', fontSize: '9px' }}
                      >
                        carborn credits
                      </div>
                      <Text
                        className='font-bold'
                        style={{ fontSize: '30px', color: '#716C6C' }}
                        variant='body1'
                      >
                        {data &&
                          isCollectionAdded &&
                          nullWrapper(
                            carbonOffsetted(
                              data.data[0].amount_col_kg +
                                tempAmount
                            )
                          )}
                      </Text>
                    </div>
                  </div>
                </div>

                <Text
                  className='font-normal mt-8'
                  style={{ fontSize: '15px' }}
                  variant='body1'
                >
                  Select your payment method
                  <svg
                    className='mx-auto'
                    width='300'
                    height='2'
                    viewBox='0 0 126 2'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <line
                      x1='0.000322007'
                      y1='0.910482'
                      x2='125.326'
                      y2='1.36129'
                      stroke='black'
                      stroke-width='0.179037'
                    />
                  </svg>
                </Text>
                <div className='w-[70%] flex justify-center items-center ml-[17%] fw-bold'>
                  <form className='pb-5'>
                    <label
                      for='email-address-icon'
                      class='block text-xs font-medium text-gray-900 text-left fw-bold mt-2 '
                      style={{ fontSize: '10px' }}
                    >
                      Name
                    </label>
                    <div class='relative'>
                      <div class='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        {/* <Img
                          src='/images/a.png'
                          className='h-2 mt-0.5 w-9'
                          alt='plus'
                        /> */}
                      </div>
                      <input
                        type='text'
                        id='email-address-icon'
                        class='bg-gray-50 border border-gray-300 text-gray-900  rounded-lg text-xs block w-full pl-2 p-2.5 h-7 mb-2'
                        placeholder=''
                      />
                    </div>
                    <label
                      for='email-address-icon'
                      class='block text-xs font-medium text-gray-900 text-left fw-bold  '
                      style={{ fontSize: '8px' }}
                    >
                      Email
                    </label>
                    <div class='relative'>
                      <div class='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        {/* <Img
                          src='/images/pngwing 1.png'
                          className='h-4 mt-0.5 w-4'
                          alt='plus'
                        /> */}
                      </div>
                      <input
                        type='text'
                        id='email-address-icon'
                        class='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full pl-2 p-2.5   h-7 mb-2'
                        placeholder=''
                      />
                    </div>
                    <label
                      for='email-address-icon'
                      class='block text-xs font-medium text-gray-900 text-left fw-bold '
                      style={{ fontSize: '8px' }}
                    >
                      Phone Number
                    </label>
                    <div class='relative'>
                      <input
                        type='text'
                        id='email-address-icon'
                        class='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full pl-2 p-2.5   h-7 mb-2'
                        placeholder=''
                      />
                      <button
                        className='p-2 bg-slate-300 border rounded-lg text-xs w-20  mt-2   hover:bg-green-300'
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          

          <AddCollection
            open={modalOpen}
            onClose={closeModal}
            pid={data.data[0].id}
            setMessage={setMessage}
          />

          <HistoryModal
            pid={data.data[0].id}
            open={HistorymodalOpen}
            onClose={() => {
              setHistoryModalOpen(false)
            }}
          />
        </div>
      )}
    </>
  )
}
export default SokoniDetail;
