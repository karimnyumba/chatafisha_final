import React, { useState } from "react";
import Button from "../../components/adminComponents/Button";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import Empty from "../../components/adminComponents/Empty";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Typography from "../../components/adminComponents/Typography";
import { useNavigate } from "react-router-dom";
import ProductModal from "./BlogModal";

function BlogCards({ blogs }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [CurrentBlog, setCurrentBlog] = useState();

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

  if (!blogs || !blogs.length) {
    return <Empty message="You don't have any Blogs yet." />;
  }

  const handle_delete = async (id) => {
    try {
      alert("comfirm delete");
      // handle delete request hear
      alert("user deleted");
    } catch (error) {
      // handle delete errors
      console.log(error);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img
            src={blog.img}
            alt="art cover"
            loading="lazy"
            width="100"
            height="66"
            class="h-20 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-cyan-900">
                  {blog.title}
                </h4>
                <p class="text-gray-600">{blog.description}</p>
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
                    handle_delete(1);
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
      ))}
    </div>
  );
}

export default function Blogs() {
  const [isLoading, setisLoading] = useState(false);
  const [Blogs, setBlogs] = useState();
  const navigate = useNavigate();

  const loadData = async () => {
    setisLoading(true);
    // handle fetch request
    const response = ["blogs"];
    if (response) {
      setBlogs(response);
      setisLoading(false);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Page>
      <PageHeader
        extra={
          <Button
            color="primary"
            onClick={() => {
              navigate("/AdminHome/createBlog");
            }}
          >
            Create Blog
          </Button>
        }
      >
        <Typography variant="h1">Blogs</Typography>
      </PageHeader>
      <PageBody>
        <BlogCards blogs={Blogs} />
      </PageBody>
    </Page>
  );
}
