import React from "react";
import { useForm } from "react-hook-form";
import Modal from "components/adminComponents/Modal";
import ModalBody from "components/adminComponents/ModalBody";
import ModalFooter from "components/adminComponents/ModalFooter";
import ModalHeader from "components/adminComponents/ModalHeader";
import { Button, Information } from "components";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFetch from "hooks";
import { useGlobalContext } from "context";


// fields: [firstname, mname, lastname, phone_number, email, location, role]

const schema = yup
  .object({
    //name
    firstname: yup
      .string()
      .required("Please provide first name! ")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
lastname: yup
      .string()
      .required("Please provide last name! ")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),

    // //email
    // email: yup
    //   .string()
    //   .required("Please provide your email address")
    //   .min(5, "email must be at least 5 characters")
    //   .max(50, "email must be at most 50 characters"),

    
    //contact
   phone_number: yup
    .string()
    .required("Please provide your contact number!")
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits, ie 07XXXXXXXX '),

    //location
    location: yup.string().required("Please add location! "),
  })
  .required();

function AddPicker({ onClose, open, setMessage }) {
  const image_ref = React.useRef(null);
  const {user_details, dispatch} = useGlobalContext();
  const {
    watch,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const firstname = watch('firstname')
  const lastname = watch('lastname')
  // const email = watch('email')
  const phone_number = watch('phone_number')
  const location = watch('location')
const { data, isLoading, error, obtainData, setData, setError, setIsLoading } = useFetch()
//Handle Submit
const onSubmit = (data) => {
  const {
    firstname,
    lastname,
    location,
    // email,
    phone_number,
  } = data
  const formData = new FormData();  
  formData.append('file', image_ref.current.files[0]);
  const img = formData.get('file')
  if(!img) return alert('Please add an image');
  const role=1
  const middlename = ''
  obtainData('user/regist_customer', 'post', {
    firstname,
    middlename,
    lastname,
    location,
    // email,
    phone_number,
    role,
    img
  },{headers:
  {
    token:user_details?.token,
    'Content-Type': 'multipart/form-data'
  }})
}

React.useEffect(
  ()=>{
   
    if (error) {
      const errMsg = error?.response?.data?.message;
      console.log('There is an error '+errMsg)
      // setMessage({
      //   msg: errMsg? errMsg: `There is an error adding picker ${firstname + ' ' + lastname}`,
      //   color: 'danger',
      // })
    }
    if (isLoading) {
      // setMessage({
      //   msg: `Adding picker ${firstname + ' ' + lastname}`,
      //   color: 'warning',
      // })
    }
    if (data) {
      dispatch({type: 'UPDATE_PICKER'})
      
      // setMessage({
      //   msg: `Picker ${firstname + ' ' + lastname} added successfully`,
      //   color: 'success',
      // })
     
    }


  }, [isLoading, error, data]
)

  return (
    <Modal closeModal={onClose} open={open}>
      <ModalHeader>Add a Picker</ModalHeader>

      {data && (
        <Information
          msg={`${firstname} ${lastname} Created Succesfully` }
          temp={true}
          color={'success'}
          clear={setData}
        />
      )}
      {error && (
        <Information
          msg={error.response?.data?.aset}
        
          color={'danger'}
          clear={setError}
        />
      )}
      {isLoading && (
        <Information
          msg={'Registering...Please Wait....'}
          color={'warning'}
          clear={setIsLoading}
        />
      )}
      <ModalBody>
        <div className='flex flex-col gap-6 items-center mt-[29px] w-full '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.firstname ? 'is-invalid' : ''
                  }`}
                  placeholder='first Name'
                  {...register('firstname')}
                  value={firstname}
                />
                {errors.firstname ? (
                  <div className='invalid-feedback'>
                    {errors.firstname?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.lastname ? 'is-invalid' : ''
                  }`}
                  placeholder='Last Name'
                  {...register('lastname')}
                  value={lastname}
                />
                {errors.lastname ? (
                  <div className='invalid-feedback'>
                    {errors.lastname?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              {/* <div className='col-md-12 mb-3'>
                  <input
                    type='text'
                    className={`form-control ${
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
                </div> */}
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.phone_number ? 'is-invalid' : ''
                  }`}
                  placeholder='phone'
                  {...register('phone_number')}
                  value={phone_number}
                />
                {errors.phone_number ? (
                  <div className='invalid-feedback'>
                    {errors.phone_number?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.location ? 'is-invalid' : ''
                  }`}
                  placeholder='location'
                  {...register('location')}
                  value={location}
                />
                {errors.location ? (
                  <div className='invalid-feedback'>
                    {errors.location?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <label htmlFor='' className='text-xs'>
                Picker profile image
              </label>
              <div className='col-md-12 mb-3'>
                <input
                  ref={image_ref}
                  type='file'
                  className={`form-control ${
                    errors.location ? 'is-invalid' : ''
                  }`}
                  placeholder='picker profile image'
                />
              </div>
            </div>
            <div className='flex flex-row justify-between mb-3'>
              <Button
              type='button'
                className='btn btn-danger  mt-3 sm:mt-0  sm:w-auto'
                color='primary'
                onClick={()=>{
                  reset()
                  onClose()
                }}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success   mt-3 sm:mt-0  sm:w-auto'
                color='primary'
                // onClick={onClose}
                type='submit'
              >
                Add Picker
              </Button>
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default AddPicker;
