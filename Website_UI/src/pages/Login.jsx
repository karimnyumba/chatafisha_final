import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Information from '../components/Information'
import useFetch from '../hooks/useFetch'
import { redirect } from 'react-router-dom'

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
  })
  .required()
const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  //Watch states
  const email = watch('email')
  const password = watch('password')

  //Set fetch
  const { data, isLoading, error, obtainData } = useFetch(
  )
  //Handle Submit
  const onSubmit = (data) => {
    const {
      email,
      password,
    } = data
    obtainData('user/login_credential', 'post', {
     email, password
    })
  }
  if(data){
   localStorage.setItem('Chatafisha', JSON.stringify({
    token: data.token,
    name:data.name
   }))
   redirect('/')
  }
if(isLoading)
return (<div>Loading....</div>)

  return (
    <main className='container d-flex justify-content-center mt-5'>
      <section className='d-flex flex-column'>
        <article className='m-auto mb-3 '>
          {error && (
            <Information msg={'There is an error'} color='danger'  />
          )}
        </article>
        <article className='registration   p-4 rounded shadow-lg w-75 m-auto mt-3'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center py-3'>Login Form</h1>
            <div className='form-row row'>
              <div className='col-md-12 mb-3'>
                <input
                  type='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder='Email'
                  {...register('email')}
                  value={email}
                />
                {errors.email ? (
                  <div className='invalid-feedback'>
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className='text-success'>Looks Good!!</div>
                )}
              </div>
              <div className='col-md-12 mb-3'>
                <input
                  type='password'
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  placeholder='password'
                  {...register('password')}
                  value={password}
                />
                {errors.password ? (
                  <div className='invalid-feedback'>
                    {errors.password?.message}
                  </div>
                ) : (
                  <div className='text-success'>Looks Good!!</div>
                )}
              </div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary ' type='submit'>
                login
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Login