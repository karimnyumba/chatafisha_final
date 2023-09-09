import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'components/adminComponents/Modal'
import ModalBody from 'components/adminComponents/ModalBody'
import ModalFooter from 'components/adminComponents/ModalFooter'
import ModalHeader from 'components/adminComponents/ModalHeader'
import { Button } from 'components'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useFetch from 'hooks'
import { useGlobalContext } from 'context'

// fields: [firstname, mname, lastname, phone_number, email, location, role]
const schema = yup
  .object({
    //amount
    amount: yup.number().required('Please provide Amount! '),
    //type of plastic
    type: yup.string().required('Please select your type of plastic'),
  })
  .required()

function AddCollection({ onClose, open, pid, setMessage }) {
  const img_element = React.useRef()
  const { user_details, dispatch } = useGlobalContext()
  const options = [
    { value: 'PET', label: 'PET' },
    { value: 'HDPE', label: 'HDPE' },
    { value: 'PVC', label: 'PVC' },
    { value: 'LDPE', label: 'LDPD' },
    { value: 'PP', label: 'PP' },
    { value: 'PS', label: 'PS' },
    {
      value: 'OTHER',
      label: 'OTHER',
    },
  ]

  // State to manage selected images and their previews
  const [selectedImages, setSelectedImages] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  // Function to handle image selection and preview
  const handleImageChange = (e) => {
    const files = e.target.files
    const selectedImagesArray = Array.from(files)

    // Append additional images to the existing selectedImages array
    const updatedSelectedImages = [...selectedImages, ...selectedImagesArray]

    // Create image previews for the additional images
    const additionalImagePreviews = selectedImagesArray.map((image) =>
      URL.createObjectURL(image)
    )

    // Append additional image previews to the existing imagePreviews array
    const updatedImagePreviews = [...imagePreviews, ...additionalImagePreviews]

    // Update state with the new arrays
    setSelectedImages(updatedSelectedImages)
    setImagePreviews(updatedImagePreviews)
  }

  // Function to handle removing an image preview
  const removeImage = (index) => {
    const updatedSelectedImages = [...selectedImages]
    const updatedImagePreviews = [...imagePreviews]

    // Remove the selected image and its preview
    updatedSelectedImages.splice(index, 1)
    updatedImagePreviews.splice(index, 1)

    // Update state with the new arrays
    setSelectedImages(updatedSelectedImages)
    setImagePreviews(updatedImagePreviews)
  }

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const { data, isLoading, error, obtainData } = useFetch()

const onSubmit = (data) => {
  // Check if there are any selected images
  if (selectedImages.length === 0) {
    alert('Please select at least one image')
    return
  }

  const formData = new FormData()

  // Append all selected images to the FormData as an array
  for (let i = 0; i < selectedImages.length; i++) {
    formData.append('img', selectedImages[i])
  }

  const { type: plastic_type, amount: quantity } = data
  formData.append('plastic_type', plastic_type)
  formData.append('quantity', quantity.toString())
  formData.append('pid', pid.toString())

  obtainData('plastic/plastic_data', 'post', formData, {
    headers: {
      token: user_details.token,
    },
  })
}


  const amount = watch('amount')
  const type = watch('type')

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'COLLECTION_ADDED',
        payload: { amount: Number(amount) },
      })
      setMessage({ data: 'Collection Added Successfully', color: 'success' })
    }
    if (error) {
      setMessage({ data: 'Error Adding Collection', color: 'danger' })
    }
    if (isLoading) {
      setMessage({
        data: 'Adding Collection....Please Wait....',
        color: 'info',
      })
    }
  }, [data, error, isLoading])

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
                <select
                  className={`form-select ${errors.type ? 'is-invalid' : ''}`}
                  {...register('type')}
                  value={type}
                >
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
                Add more pictures of proof
              </label>
              <div className='col-md-12 mb-3'>
                <input
                  type='file'
                  ref={img_element}
                  multiple
                  onChange={handleImageChange}
                  className={`form-control ${
                    errors.picture ? 'is-invalid' : ''
                  }`}
                  placeholder='Add more pictures of proof'
                />
                {errors.picture ? (
                  <div className='invalid-feedback'>
                    {errors.picture?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              {/* Display image previews */}
              <div className='col-md-12 mb-3'>
                <div className='row'>
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className='mb-2 col-4 ' style={{'position':'relative'}}>
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className='rounded w-20 h-20'
                      />
                      <button
                        type='button'
                        className='btn btn-danger btn-sm ms-2'
                        onClick={() => removeImage(index)}
                        style={{ position: 'absolute', top: 0, right: 0 }}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
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
                type='submit'
                className='btn btn-success mt-3 sm:mt-0  sm:w-auto'
                color='primary'
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

export default AddCollection
