import React from 'react'
import { useForm } from 'react-hook-form';
import { Text, Img } from 'components';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useFetch from 'hooks'
import { Information } from 'components'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
const schema = yup
  .object({
    //name
    name: yup
      .string()
      .required('Please provide picker/organization name! ')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),

    //email
    email: yup
      .string()
      .required('Please provide your email address')
      .min(5, 'email must be at least 5 characters')
      .max(50, 'email must be at most 50 characters'),

    //registration
    registration: yup
      .number()
      .positive("Registration number can't be negative")
      .integer('Registration should be an integer!')
      .required('Please provide your registration number'),
    //contact
    contact: yup
      .string()
      .required('Please provide your contact number! ')
      .min(5, 'contact must be at least 5 characters')
      .max(50, 'contact must be at most 50 characters'),

    //location
    location: yup.string().required('Please select your location! '),

    //password
    password: yup
      .string()
      .required('Please provide your password!')
      .min(4, 'password must be at least 4 characters')
      .max(50, 'password must be at most 50 characters'),
    verifyPassword: yup
      .string()
      .required('Please verify your password!')
      .test(
        'password-match',
        'Password doesnt match, Please try again',
        function (value) {
          return value === this.resolve(yup.ref('password'))
        }
      ),

    //role
    role: yup.string().required('Please select your role!'),
  })
  .required()
const Register = () => {
 //get dispatch
 
 
 const {
   register,
   watch,
   handleSubmit,
   formState: { errors },
 } = useForm({
   resolver: yupResolver(schema),
   mode: 'onChange',
 })
 
 const navigate = useNavigate();
 //Fetch data
 const { data, isLoading, error, obtainData } = useFetch()
 //Handle Submit
 const onSubmit = data=>{
  const {name:u_name, registration:reg_no, location, email, contact:phone, role, password} = data
  obtainData('user/registration_data', 'post', {u_name, reg_no, location, email, phone, role, password})
  
 }

 const name = watch('name')
 const email = watch('email')
 const registration = watch('registration')
 const contact = watch('contact')
 const location = watch('location')
 const password = watch('password')
 const role = watch('role')
 const verifyPassword = watch('verifyPassword')
  
 if(data){
  //set to localStorage
  // <Information msg={data.aset} color='success'/>
  return <Navigate to={'/loginform'}/>
 }
if(isLoading){
 return <div><h1>Loading.....</h1></div>
}
  return (
    <main
      className=' bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-auto items-center justify-start mx-auto p-[38px] sm:px-5 w-full'
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <section className='d-flex flex-column w-[50%] md:w-[75%] sm:w-full'>
        <article className='mx-auto mb-3 '>
          {error && <Information msg={'There is an error'} color='danger' />}
        </article>
        <article className='registration   p-4 rounded shadow-lg w-75 m-auto'>
          <div class='mb-3 pb-1border-b-2 text-center font-base text-gray-700'>
            <div className='flex justify-center '>
              <Text
                className='font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-center w-auto sm:text-lg'
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
            Create account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row row'>
              <div className='col-md-12 mb-3'>
                <input
                  type='text'
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder='Name of Picker/Organization'
                  {...register('name')}
                  value={name}
                />
                {errors.name ? (
                  <div className='invalid-feedback'>{errors.name?.message}</div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
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
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-12 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.registration ? 'is-invalid' : ''
                  }`}
                  placeholder='Registration Number'
                  {...register('registration')}
                  value={registration}
                />
                {errors.registration ? (
                  <div className='invalid-feedback'>
                    {errors.registration?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.contact ? 'is-invalid' : ''
                  }`}
                  placeholder='Contact'
                  {...register('contact')}
                  value={contact}
                />
                {errors.contact ? (
                  <div className='invalid-feedback'>
                    {errors.contact?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <select
                  className={`form-select ${
                    errors.location ? 'is-invalid' : ''
                  }`}
                  {...register('location')}
                  value={location}
                >
                  <option value=''>Select Location</option>
                  <option value='Temeke'>Temeke</option>
                  <option value='Kinondoni'>Kinondoni</option>
                  <option value='Kigamboni'>Kigamboni</option>
                  <option value='Ubungo'>Ubungo</option>
                  <option value='Kisarawe'>Kisarawe</option>
                  <option value='Ilala'>Ilala</option>
                </select>
                {errors.location ? (
                  <div className='invalid-feedback'>
                    {errors.location?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>

              <div className='col-md-12 mb-3'>
                <input
                  type='password'
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  placeholder='Password'
                  {...register('password')}
                  value={password}
                />
                {errors.password ? (
                  <div className='invalid-feedback'>
                    {errors.password?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-12 mb-3'>
                <input
                  type='password'
                  className={`form-control ${
                    errors.verifyPassword ? 'is-invalid' : ''
                  }`}
                  placeholder='Verify Password'
                  {...register('verifyPassword')}
                  value={verifyPassword}
                />
                {errors.verifyPassword ? (
                  <div className='invalid-feedback'>
                    {errors.verifyPassword?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-12 mb-3 mt-2'>
                <select
                  className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                  {...register('role')}
                  value={role}
                >
                  <option value=''>Select Role</option>
                  <option value='Picker'>Picker</option>
                  <option value='Organization'>Organization</option>
                  <option value='Explorer'>Explorer</option>
                </select>
                {errors.role ? (
                  <div className='invalid-feedback'>{errors.role?.message}</div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary form-control' type='submit'>
                register
              </button>
            </div>
            <div class='my-2 py-3 border-b-2 text-center font-base text-gray-700'>
              <label class='block text-gray-500 font-normal mb-1'>
                <a
                  href='/loginform'
                  class='cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400 no-underline                  '
                >
                  <span>Have an account alredy? Login here</span>
                </a>
              </label>
            </div>
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

export default Register;