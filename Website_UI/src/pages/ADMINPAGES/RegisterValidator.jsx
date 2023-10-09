import React , {useState}from 'react'
import { set, useForm } from 'react-hook-form'
import Modal from 'components/adminComponents/Modal'
import ModalBody from 'components/adminComponents/ModalBody'
import ModalFooter from 'components/adminComponents/ModalFooter'
import ModalHeader from 'components/adminComponents/ModalHeader'
import { Button, Information } from 'components'
import useFetch from 'hooks';
import { useNavigate, Navigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

    // //registration
    // registration: yup
    //   .number()
    //   .positive("Registration number can't be negative")
    //   .integer('Registration should be an integer!')
    //   .required('Please provide your registration number'),
    // //contact
    contact:  yup
    .string()
    .required("Please provide your contact number!")
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits, ie 07XXXXXXXX '),

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

function RegisterValidator() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
 

  //Fetch data
  const { data, isLoading, error, obtainData, setError, setData, setIsLoading } = useFetch()
  //Handle Submit
  const onSubmit = (data) => {
    let {
      name: u_name,
      registration: reg_no,
      location,
      email,
      contact: phone,
      role,
      password,
    } = data
    if(role==='4') role=4;
    obtainData('user/registration_data', 'post', {
      u_name,
      reg_no,
      location,
      email,
      phone,
      role,
      password,
    })
  }

  const name = watch('name')
  const email = watch('email')
  // const registration = watch('registration')
  const contact = watch('contact')
  const location = watch('location')
  const password = watch('password')
  const role = watch('role')
  const verifyPassword = watch('verifyPassword')


 
  return (
    <div className='shadow p-4'>
     

      {data && (
        <Information
          msg={'Successfully Registered ' + name}
          temp={true}
          color={'success'}
          clear={setData}
        />
      )}
      {error && (
        <Information
          msg={error.response?.data?.aset}
          temp={true}
          color={'danger'}
          clear={setError}
          
        />
      )}
      {isLoading && (
        <Information msg={'Registering...Please Wait....'} color={'warning'}
        clear={setIsLoading} />
      )}
      <div className='flex flex-col gap-6 items-center mt-[29px] w-full '>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-row row'>
            <div className='col-md-12 mb-3'>
              <input
                type='text'
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder='Name of Validator/Picker/Organization'
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
                <div className='invalid-feedback'>{errors.email?.message}</div>
              ) : (
                <div className='text-success'></div>
              )}
            </div>

            <div className='col-md-6 mb-3'>
              <input
                type='text'
                className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
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
                className={`form-select ${errors.location ? 'is-invalid' : ''}`}
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
                <option value='4'>Validator</option>
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

          <div className='flex flex-row justify-between mb-3'>
            <button className='btn btn-success' type='submit'>
              Register User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterValidator
