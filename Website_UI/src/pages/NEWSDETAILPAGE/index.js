import { NavBar, Text, NewsContentDisplay } from "components";
import React from "react";
import { useGlobalContext } from "context";
import { useNavigate } from "react-router-dom";
import BlogDescription from "components/BlogDescription";

function NEWSDETAILSPAGE(props) {
  const { article } = useGlobalContext();
  const navigate = useNavigate()
  React.useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: Enables smooth scrolling
      })
    }
    scrollToTop()
  }, [])
  return (
    <section className='container'>
      <article>
        <NavBar />
      </article>
      <article className="">
        <div className="mt-5 page_links" onClick = {()=>navigate('/news_and_updates')}>
           Back
        </div>
        <div className='text-center m-5'>
          <h1>News & Updates</h1>
          <hr className='hr_style d-inline-block' />
        </div>
      </article>
      <article>
        <div>
          <span className='text-success'>Featured Posts </span>
        </div>
        <NewsContentDisplay type={'carousel'} />
      </article>
      <article>
        <NewsContentDisplay type={'grid'} />
      </article>
    </section>
  )
}

export default NEWSDETAILSPAGE;
