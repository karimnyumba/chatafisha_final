import React, { useEffect, useRef, useState } from 'react'
import { Text, Img, Button, ApiErrorDisplay } from 'components'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Information } from 'components'
import useFetch from 'hooks'
import { useGlobalContext } from 'context'

import { Navigate, useNavigate } from 'react-router-dom'

//Validation Schema
const schema = yup
  .object({
    //email
    email: yup
      .string()
      .required('Please provide email!')
      .min(5, 'email should be at least 5 characters')
      .max(50, 'email must be at most 50 characters'),

    //password
    password: yup
      .string()
      .required('Please provide your password! ')
      .min(4, 'password must be at least 4 characters')
      .max(50, 'password must be at most 50 characters'),
    //remember me
  })
  .required()
const LoginForm = () => {
  const navigate = useNavigate()
  const [ShowPassword, setShowPassword] = useState(false);
  const { user_redirect_message, dispatch } = useGlobalContext()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  //Watch states
  const email = watch('email')
  const password = watch('password')
  const rememberMe = watch('rememberMe')
  //Set fetch
  const { data, isLoading, error, obtainData } = useFetch()
  //Handle Submit
  const onSubmit = (data) => {
    //delete the previous login if any:
    localStorage.clear();
    const { email, password } = data
    obtainData('user/login_credential', 'post', {
      email,
      password,
    })
  }
  if (data) {
    // <Information msg={data.aset} color="success" />;
    dispatch({
      type: 'CREATE_TOKEN',
      payload: {
        user_details: {
          token: data.token,
          user_data: { ...data.user_data, isLoggedIn: true },
        },
      },
    })

    if(!rememberMe){
     

    }
    else if(rememberMe) {
      localStorage.setItem(
        'Chatafisha',
        JSON.stringify({
          token: data.token,
          user_data: {...data.user_data, isLoggedIn: true},
        })
      )
    }
    dispatch({
      type: 'CREATE_REDIRECT_MESSAGE',
      payload: {
        message: `${data.user_data.name} you are logged in successfully`,
        color: 'success',
      },
    })
    return <Navigate to={'/homepage'} />
  }
  if (isLoading) return <div>Loading....</div>

  return (
    <main
      className='bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne  h-[100vh] sm:h-[100%] md:h-[100%] items-center justify-start mx-auto p-[38px] sm:px-5 w-full'
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <section className='d-flex flex-column'>
        <article className='m-auto mb-3 '>
          {error && (
            <ApiErrorDisplay
              errObject={
                new Map([
                  [
                    'ERR_NETWORK',
                    {
                      msg: 'Network error, Please check your internet connection...',
                      color: 'danger',
                    },
                  ],
                  [
                    'ERR_BAD_REQUEST',
                    {
                      msg:error?.response?.data?.aset,
                      color:'danger'

                    }
                  ]
                ])
              }
              errCode={error.code}
            />
          )}
        </article>
       
        {user_redirect_message && (
          <article className='m-auto mb-3 '>
            <Information
              msg={user_redirect_message.message}
              color={user_redirect_message.color}
              temp={true}
              clearState={'REMOVE_REDIRECT_MESSAGE'}
            />
          </article>
        )}
        <article className='registration   p-4 rounded shadow-lg w-90 m-auto mt-3'>
          <div class='mb-3 pb-1border-b-2 text-center font-base text-gray-700'>
            <div className='flex justify-center '>
              <Text
                className='font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-center w-auto'
                as='h4'
                variant='h4'
              >
                CHATAFISHA
              </Text>
              <Img
                src='images/img_mainlogo_black_901.svg'
                className='h-8 md:ml-[13px] ml-[15px] md:mt-0 mt-[5px] w-auto '
                alt='mainlogo'
              />
            </div>
          </div>
          <div class='mb-3 text-center font-semibold text-black'>
            Login to your account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row row'>
              <div className='col-md-12 flex flex-wrap items-stretch w-full relative h-15 bg-white  rounded mb-3 '>
                <div class='flex -mr-px justify-center w-10 p-2'>
                  <span class='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
                    <i class='fas fa-envelope'></i>
                  </span>
                </div>
                <input
                  type='email'
                  className={`flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-5 border-grey-light rounded rounded-l-none px-1 self-center relative text-sm outline-none ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder='Email'
                  {...register('email')}
                  value={email}
                />
                {errors.email ? (
                  <div className='invalid-feedback'>
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-12 flex flex-wrap items-stretch w-full  relative h-15 bg-white  rounded mb-6 pr-1'>
                <div class='flex -mr-px justify-center w-10 p-2'>
                  <span class='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
                    <i class='fas fa-lock'></i>
                  </span>
                </div>
                <input
                  type={ShowPassword ? 'text' : 'password'}
                  className={`flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-1 self-center relative text-sm outline-none ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  placeholder='password'
                  {...register('password')}
                  value={password}
                />
                <div class='flex -mr-px justify-center w-10 p-2'>
                  <span
                    class='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'
                    onClick={() => setShowPassword(!ShowPassword)}
                  >
                    {ShowPassword ? (
                      <i class='fas fa-eye-slash'></i>
                    ) : (
                      <i class='fas fa-eye'></i>
                    )}
                  </span>
                </div>
                {errors.password ? (
                  <div className='invalid-feedback'>
                    {errors.password?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
            </div>

            <div class='flex justify-between'>
              <label class='block text-gray-500 font-bold mb-2'>
                <input
                  type='checkbox'
                  class='leading-loose text-pink-600'
                  {...register('rememberMe')}
                  value={rememberMe}
                  onChange={(e) => setValue('rememberMe', e.target.checked)}
                />{' '}
                <span class='p text-sm text-gray-600 leading-snug'>
                  {' '}
                  Remember Me{' '}
                </span>
              </label>{' '}
            </div>

            <div className='text-center'>
              <button className='btn btn-primary form-control' type='submit'>
                login
              </button>
            </div>
            <div class='my-2 pb-1 border-b-2 text-center font-base text-gray-700'>
              <label class='block text-gray-500 font-normal mb-1'>
                <a
                  href='#'
                  class='cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400 no-underline                  '
                >
                  <span>Forgot Password?</span>
                </a>
              </label>
              <button
                className=' btn bg-white rounded-sm text-left ml-[110px] my-3 hover:text-blueGray-300  transform hover:scale-y-75 transition-transform'
                onClick={() => {
                  navigate('/registerform')
                }}
              >
                create an account here
              </button>
            </div>
            {/* <hr className="mb-6 border-b-1 border-blueGray-600" /> */}

            <div className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
              Copyright © {new Date().getFullYear()}{' '}
              <a
                href='/'
                className='text-blueGray-500 hover:text-blueGray-300 text-sm font-semibold py-1'
              >
                Chatafisha
              </a>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default LoginForm
