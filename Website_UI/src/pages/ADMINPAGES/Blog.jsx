import React, { useState, useEffect } from "react";
import Button from "../../components/adminComponents/Button";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import Empty from "../../components/adminComponents/Empty";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Typography from "../../components/adminComponents/Typography";
import BlogDescription from "components/BlogDescription";
import { useNavigate } from "react-router-dom";
import ProductModal from "./BlogModal";
import useFetch from "hooks";
import { useGlobalContext } from "context";
import axios from 'axios'
import { Information } from "components";

function BlogCards({ blog }) {
  console.log(blog)
  const [modalOpen, setModalOpen] = useState(false);
  const [CurrentBlog, setCurrentBlog] = useState();
  const [showMore, setShowMore] = useState(false)
  const {user_details} = useGlobalContext();
  const {loading, error, data, obtainData} = useFetch();
  const [deleteMessage, setDeleteMessage] = useState('');

  function closeProductModal() {
    setModalOpen(false);
  }

  function openProductModal() {
    setModalOpen(true);
  }

  function openModal() {
    console.log("open modal");
    setModalOpen(true);
  }
  const handle_delete =() => {
    //delete
    let url, method, options,body;
    obtainData(url=`blog/article_to_delete/${blog.id}`, method='delete', body={},options={
      headers:{
        token:user_details.token,
      }
    })
  };
  if(data){
    window.location.pathname = 'AdminHome/allBlogs'

  }
  if(error){
    console.log(error)
  }
  return (
    <div className="grid gap-12 lg:grid-cols-3">
    {
      deleteMessage && <Information msg={deleteMessage} temp={true} />
    }
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
        key={blog.id}
        >
          <img
            src={'http://139.162.249.220:9292/'+blog.img}
            alt="art cover"
            loading="lazy"
            width="100"
            height="100"
            class="h-20 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-cyan-900">
                  {blog.title}
                </h4>
                <BlogDescription content={blog.content}/>
              </div>
              <div className="flex flex-row gap-4 mt-3">
                <button
                  class="block btn btn-warning w-max text-cyan-600"
                  onClick={() => {
                    setCurrentBlog(blog);
                    openProductModal();
                  }}
                >
                  Edit
                </button>
                <button
                  class="block btn btn-danger w-max text-cyan-600"
                  onClick={() => {
                    handle_delete();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <ProductModal
            onClose={closeProductModal}
            open={modalOpen}
            blog={CurrentBlog}
          />
        </div>
    </div>
  );
}

export default function Blogs() {
  //user
  const {user_details} = useGlobalContext();
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const {data, isLoading, error, obtainData} = useFetch();
  //fetch blogs
  useEffect(()=>{
  let url,  options, method, body;
  if(user_details?.token)
    obtainData(url='blog/article_data',method='get',body=null, options={
      headers:{
      token:user_details.token
      }
    })}, [user_details])
  //obtained data
    useEffect(
    ()=>{
      if(data){
        setBlogs(data.data)
      }
      if(error){
        console.log(error)
      }

    }, [data, error]

  )
  if (isLoading)
  return <h1>Loading.....</h1>;
  if (!blogs || !blogs.length) {
    return <Empty message="You don't have any Blogs yet." />
  }
  return (
    <Page>
      <PageHeader
        extra={
          <Button
            color='primary'
            onClick={() => {
              navigate('/AdminHome/createBlog')
            }}
          >
            Create Blog
          </Button>
        }
      >
        <Typography variant='h1'>Blogs</Typography>
      </PageHeader>
      <PageBody>
        {blogs && blogs.map((blog) => <BlogCards blog={blog} />)}
      </PageBody>
    </Page>
  )
}
