import React, { useRef } from "react";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import TextArea from "components/adminComponents/TextArea";
import Button from "components/adminComponents/Button";
import Typography from "components/adminComponents/Typography";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import useFetch from "hooks";
import { Information } from "components";

function CreateBlog() {
  const formRef = useRef();
  const navigate = useNavigate();
  const {user_details} = useGlobalContext()
  const {error, data, obtainData, loading} = useFetch();
  const handleSubmit = (event) => {
    event.preventDefault()
    //for image submission
    if (user_details?.token) {
      const formData = new FormData()
      const editedData = {  }
      const target = event.target
      const title = target.title.value
      const description = target.description.value
      let img
      if (target.img) {
        formData.append('newImage', target.img.files[0])
        img = formData
      }

      if (title && img && description) {
        editedData.title = title
        editedData.description = description
        editedData.img = img.get('newImage')
      }
      else
      return ;

      let url, method, body, options
      obtainData(
        (url = 'blog/article_data'),
        (method = 'post'),
        (body = editedData),
        (options = {
          headers: {
            token: user_details.token,
            'Content-Type': 'multipart/form-data',
          },
        })
      )
    }
  }
  const [message, setMessage] = React.useState(null)
  React.useEffect(() => {
    if (error) {
      setMessage({ message: 'Something went wrong!!!', color: 'danger' })
    }
    if (data) {
      setMessage({ message: 'Successful post!!!', color: 'success' })
    }
  }, [data, error])
  return (
    <Page>
      <PageHeader
        extra={
          <Button
            color="primary"
            onClick={() => {
              navigate("/AdminHome/allBlogs");
            }}
          >
            All Blogs
          </Button>
        }
      >
        <Typography variant="h1" className="ml-2">
          Create Blogs
        </Typography>
      </PageHeader>
      <PageBody>
        <div className="min-h-screen bg-gray-100 mt-[-2%] flex flex-col justify-center">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Create a Blog</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">
                      Enter the required Blog details to create or publish the blog 
                    </p>
                  </div>
                </div>
                <div>
                  {message && <Information msg={message.message} color={message.color} clear={setMessage} temp={true}/>}
                </div>
                <form
                  enctype="multipart/form-data"
                  onSubmit={handleSubmit}
                  ref={formRef}
                >

                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="flex flex-col">
                        <label className="leading-loose">Blog Title</label>
                        <input
                          type="text"
                          required
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Event title"
                          name="title"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Blog image</label>
                        <input
                          class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                          id="formFileSm"
                          type="file"
                          name="img"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="leading-loose">
                          Blog Description
                        </label>
                        <TextArea type="text" name="description" />
                      </div>
                    </div>
                    <div className="pt-4 flex items-center space-x-4">
                      {/* <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button> */}
                      <button
                        className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        type="submit"
                      >
                        publish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </Page>
  );
}

export default CreateBlog;
