import React from "react";
import { useForm } from "react-hook-form";
import Modal from "components/adminComponents/Modal";
import ModalBody from "components/adminComponents/ModalBody";
import ModalFooter from "components/adminComponents/ModalFooter";
import ModalHeader from "components/adminComponents/ModalHeader";
import { Button } from "components";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFetch from "hooks";
import { useGlobalContext } from "context";

// fields: [firstname, mname, lastname, phone_number, email, location, role]
const schema = yup
  .object({
    //amount
    amount: yup.number().required("Please provide Amount! "),
    //type of plastic
    type: yup.string().required("Please select your type of plastic"),

   
  })
  .required();


function AddCollection({ onClose, open, pid }) {
 
  const img_element = React.useRef();
  const {user_details}=useGlobalContext();
  const options = [
    { value: "PET", label: "PET" },
    { value: "HDPE", label: "HDPE" },
    { value: "PVC", label: "PVC" },
    { value: "LDPE", label: "LDPD" },
    { value: "PP", label: "PP" },
    { value: "PS", label: "PS" },
    {
      value: "OTHER",
      label: "OTHER",
    },
  ];

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

const { data, isLoading, error, obtainData } = useFetch()
//Handle Submit
const onSubmit = (data) => {
  const formData = new FormData();
  formData.append('file', img_element.current.files[0]);
  
  const {
   type: plastic_type,
    amount: quantity,
    picture: img,
  } = data
  obtainData('plastic/plastic_data', 'post', {
   plastic_type,
    quantity,
    img: formData.get('file'),
    pid
  },
  {
    headers:{
      token: user_details.token
    }
  }
  )
}
const amount = watch("amount");
const type = watch("type");
const picture = watch("picture");

  return (
    <Modal closeModal={onClose} open={open}>
      <ModalHeader>Add a Collection</ModalHeader>
      <ModalBody>
        <div className='flex flex-col gap-6 items-center mt-[29px] w-full '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row row'>
              <div className='col-md-12 mb-3'>
                <input
                  type='number'
                  className={`form-control ${
                    errors.amount ? 'is-invalid' : ''
                  }`}
                  placeholder='Amount collected in (kg)'
                    {...register('amount')}
                    value={amount}
                />
                {errors.amount ? (
                  <div className='invalid-feedback'>
                    {errors.amount?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>

              <label htmlFor='' className='text-xs'>
                Type of plastic Collected
              </label>
              <div className='col-md-12 mb-3'>
                <select className={`form-select ${errors.type ? 'is-invalid' : ''}`}
                {...register('type')}
                value={type} >
  <option value=''>Select Type</option>
  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
{errors.location ? (
  <div className='invalid-feedback'>
    {errors.location?.message}
  </div>
) : (
  <div className='text-success'></div>
)}

                
                
              </div>

              <label htmlFor='' className='text-xs'>
                Add a picture of proof
              </label>
              <div className='col-md-12 mb-3'>
                <input
                  type='file'
                  ref={img_element} 

                  className={`form-control ${
                    errors.picture ? 'is-invalid' : ''
                  }`}
                  placeholder='Add a picture of proof'
                    // {...register('picture')}
                    // value={picture}
                />
                {errors.picture ? (
                  <div className='invalid-feedback'>
                    {errors.picture?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
            </div>
            <div className='flex flex-row justify-between '>
              <Button
                className='btn btn-danger mt-3 sm:mt-0  sm:w-auto'
                color='primary'
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success mt-3 sm:mt-0  sm:w-auto'
                color='primary'
                onClick={onClose}
              >
                Add Collection
              </Button>
            </div>{' '}
            <ModalFooter></ModalFooter>
          </form>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default AddCollection;
