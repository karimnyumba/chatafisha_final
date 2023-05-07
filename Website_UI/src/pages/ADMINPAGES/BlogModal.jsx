import React,{useEffect, useRef} from "react";
import Button from "../../components/adminComponents/Button";
import Modal from "../../components/adminComponents/Modal";
import ModalBody from "../../components/adminComponents/ModalBody";
import ModalFooter from "../../components/adminComponents/ModalFooter";
import ModalHeader from "../../components/adminComponents/ModalHeader";
import useFetch from "hooks";
import { useGlobalContext } from "context";
import { Information } from "components";

export default function ProductModal({
  onClose,
  open,
  blog
}) {
  const formRef = useRef();
  const {loading, error, data,obtainData } = useFetch()
  const {user_details, dispatch, user_redirect_message} = useGlobalContext();
  const handleEdit = (event) => {
    event.preventDefault()
    //for image submission
  if(user_details?.token){
  const formData = new FormData();
  const editedData = {id:blog.id};
  const target = event.target;
  const title = target.title.value;
  const description = target.description.value;
  let img;
  if(target.img){
    formData.append('newImage',target.img.files[0])
    img = formData;
  }

  if(title) editedData.title= title;
  if(description) editedData.description = description;
  if(img) editedData.img = img.get('newImage');

  let url, method,body, options;
  obtainData(
    (url = 'blog/update_article_data'),
    (method = 'patch'),
    (body = editedData),
    (options = {
      headers: {
        token: user_details.token,
        'Content-Type': 'multipart/form-data',
      },
    })
  )

  }
};
const [message, setMessage] = React.useState(null);
useEffect(()=>{
if(error){
setMessage({message:'Something went wrong!!!', color:'danger'})
}
if(data){
  setMessage({message:'Successful edit!!!', color:'success'})
}}, [data, error])
  return (
    <Modal closeModal={onClose} open={open}>
      <div>
        {message && (
          <Information
            msg={message.message}
            temp={true}
            color={message.color}
            clearState={'REMOVE_REDIRECT_MESSAGE'}
            clear={setMessage}
          />
        )}
      </div>
      <form onSubmit={handleEdit} ref={formRef}>
        <ModalHeader>Edit Article</ModalHeader>
        <ModalBody>
          <p className='text-sm text-gray-500'>
            Enter details to edit the article
          </p>
          <div className=' text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
            <div className='flex flex-col'>
              <label className='leading-loose'>Blog Title</label>
              <input
                type='text'
                defaultValue={blog != null ? blog.title : ''}
                className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                placeholder='Event title'
                name='title'
              />
            </div>
            <div className='flex flex-col'>
              <label className='leading-loose'>Event Subtitle</label>
              <input
                class='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'
                id='formFileSm'
                type='file'
                name='img'
              />
            </div>

            <div className='flex flex-col'>
              <label className='leading-loose'>Event Description</label>
              <textarea
                rows={4}
                type='text'
                name='description'
                className='focus:border-indigo-500 mt-1 block w-full border rounded-md'
                defaultValue={blog != null ? blog.description : ''}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className='w-full sm:ml-3 sm:w-auto'
            color='primary'
            disabled={loading}
            loading={loading}
            type='submit'
          >
            Submit
          </Button>
          <Button
            className='w-full mt-3 sm:mt-0 sm:ml-3 sm:w-auto'
            color='ghost-primary'
            onClick={onClose}
            type='submit'
          >
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
