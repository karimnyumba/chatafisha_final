import React from 'react';
import useBreakpoint from "@restart/hooks/useBreakpoint";
import { Text, Img, Button, NewsCarousel, Information } from "components";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from 'context';
import validateLocalStorage from 'LocalStorage';
import connectWallet from 'connect';

function NavBar({sokoniPlaceOpen=false}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isSmall = useBreakpoint("sm", "down");
  
  //global context
  const { user_details, dispatch, handleLogout, openRegisterPickerModal, setWeb3, setAccounts, setContractInstance, web3Instance, connectError, setConnectError } = useGlobalContext()

  //authentication: check from local storage
  const stored_user_details = validateLocalStorage()
  const isAuthenticated = (user_details?.token || stored_user_details) ? true : false  

  
  const loginLogout = ()=>{
    //login and logout carried out by single function
    if(isAuthenticated){
      handleLogout()
    }else{
      navigate('/loginpage')
    }
  }
  const navigate = useNavigate()
  React.useEffect(() => {
     if (!isSmall) {
      setIsOpen(true)
     } 

  }, [])

  
  
  return (
    <>
    <nav className=' w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 -mt-3 '>
      <div className='relative flex items-center justify-between  ml-[5%]'>
        <div className='flex-1 flex items-center justify-start ml-auto sm:items-stretch sm:justify-start'>
          <Text
            className='font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-left w-auto'
            style={{ cursor: 'pointer' }}
            as='h4'
            variant='h4'
            onClick={() => navigate('/')}
          >
            CHATAFISHA
          </Text>
          <Img
            src='/images/img_mainlogo_black_901.svg'
            className='h-8 md:ml-[13px] ml-[15px] md:mt-0 mt-[5px] w-auto '
            alt='mainlogo'
          />
        </div>
        <div className='absolute inset-y-0 right-5 flex items-center mt-2 sm:block hidden'>
          {/* Mobile menu button */}
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black_900_3f focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            aria-controls='mobile-menu'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            {/* Icon when menu is closed. */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 text-black`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            {/* Icon when menu is open. */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 text-black`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex ${isOpen ? 'block' : 'hidden'}  sm:mb-5  justfy-end`}
        >
          <ul
            className={`flex flex-row list-none   sm:bg-white sm:h-[100px] sm:rounded-md sm:absolute sm:z-40 sm:block  sm:p-3 left-1 sm:top-16 h-8 w-[100%] sm:ml-[-9%]`}
          >
            {isAuthenticated && (
              <li className='flex items-center'>
                <Text
                  className='font-medium mt-[3px] text-black_900 text-left w-auto transform sm:mx-auto sm:my-1 hover:scale-y-90 transition-transform'
                  variant='body2'
                  onClick={() => navigate('/homepage')}
                >
                  Home{' '}
                </Text>
              </li>
            )}

            <li className='flex items-center'>
              <Text
                className='common-pointer font-medium ml-[39px] mt-1 text-black_900 sm:my-1  sm:mx-auto text-left w-auto  transform hover:scale-x-90 transition-transform'
                variant='body2'
                onClick={loginLogout}
              >
                {isAuthenticated ? 'Logout' : 'Login'}
              </Text>
            </li>

            <li className='flex items-center' onClick={()=> {
              if(!web3Instance)
              connectWallet(setWeb3, setAccounts, setContractInstance);
              
              else console.log(web3Instance);}}>
              <Text
                className='bg-bluegray_100 font-medium h-[22px] ml-[37px] sm:my-1 sm:mx-auto px-[9px] py-[3px] rounded-[11px] text-black_900 text-left text-shadow-ts1 w-[104px]  transform hover:scale-x-90 transition-transform text-center'
                variant='body2'
              >
                {(!web3Instance)?'Connect':'Connected!'}
              </Text>
            </li>

            {(user_details?.user_data|| stored_user_details?.user_data) &&
              (user_details.user_data?.role_id === 'Validator' ||stored_user_details.user_data?.role_id ==='Validator' ) && sokoniPlaceOpen &&
              (
                  <li>
                    <div className='flex flex-col justify-center'>
                      <div
                        className='rounded-full cursor-pointer bg-green_403 ml-4  w-10 h-10  transform hover:scale-y-75 transition-transform'
                        onClick={() =>{
                        setIsOpen(!isOpen)
                          dispatch({
                            type: 'OPEN_REGISTER_PICKER_MODAL',
                            payload: !openRegisterPickerModal,
                          })
                        }
                        }
                      >
                        <i className='h-10  w-5 ml-[8.5px] mt-[9.5px] text-center fa fa-user-tie text-white' />
                      </div>
                    </div>
                  </li>
                )}
          </ul>
        </div>
      </div>
    </nav>
   <div className='m-auto'>
   {connectError &&
    <Information msg={connectError} temp={true} clear={setConnectError}/>}
   </div> 
    </>
  )
}

export default NavBar