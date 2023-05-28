import React, { useEffect, useState } from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import BlogDescription from 'components/BlogDescription'
import { useGlobalContext } from 'context'
import { useNavigate } from 'react-router-dom'
import {  Text } from 'components'
import { v4 as uuidv4 } from 'uuid'

const SingleCarouselPage = ({ blogs, navigateToSinglePage, getDate }) => {
  const navigate = useNavigate()
  return (
    <article className='d-flex justify-content-around no-wrap'>
      {blogs.map((card, ind) => {
        return (
          <div className={`m-3 `} key={uuidv4()}>
            <div className='card' style={{ width: '18rem', height: '16rem' }}>
              <img
                src={'http://139.162.249.220:9292/' + card.img}
                className='w-[100%] h-50 mb-[-14px] ml-auto  object-cover z-[1]'
                alt={card.title}
              />
              <div
                className='card-title mt-4 page_links'
                onClick={() => navigateToSinglePage(card)}
              >
                <Text
                  className='font-bold text-dark text-left text-xl w-full'
                  variant='h4'
                >
                  {card.title}
                </Text>
              </div>
              <div className='card-body'>
                <Text
                  className='text-white pt-1 text-left text-xs '
                  variant='body2'
                >
                  {card.content && (
                    <BlogDescription content={card.content.substring(0, 60)} />
                  )}
                  <div className='d-flex justify-content-between'>
                    <small className='mb-3 text-muted'>{getDate()}</small>
                    <span
                      className='text-primary page_links'
                      onClick={() => navigateToSinglePage(card)}
                    >
                      Read More...
                    </span>
                  </div>
                </Text>
              </div>
            </div>
          </div>
        )
      })}
    </article>
  )
}
const NewsCarosel = ({ blogs, navigateToSinglePage, getDate, currentBlogSet }) => {
  const [subPosts, setSubPosts] = useState(null);
  const { dispatch } = useGlobalContext()
  const [noPosts, setNoPosts] = useState(3);
  const navigate = useNavigate()
  useEffect(
    () => {
      const noPostPerScroll = (size) => {
        if (size < 768) return 1
        else if (size < 992) return 2
        return 3
      }
      const resizeEvent = window.addEventListener('resize', ()=>{
        const np = noPostPerScroll(window.innerWidth)
        if(noPosts !== np)
        setNoPosts(np);

      })
      return ()=>{
        window.removeEventListener('resize', ()=>{}) 
      }
    }, [window.innerWidth])
    useEffect(
      ()=>{
        const createSubPosts = ()=>{
          const sbBlogs = []
          let n = 0;
          let blogsLength = blogs.length;
          while(n<blogsLength){
            sbBlogs.push(blogs.slice(n, n+noPosts))
            n+=noPosts;
          }
        
          return  sbBlogs
        } 
        setSubPosts(createSubPosts())
        console.log('Refetched!!!!!!!!')
      
      }, [noPosts, blogs]
    )
  
  return (
    <div className=''>
      <>
        <div id='demo' className='carousel slide ' data-bs-ride='carousel'>
          {/* Indicators/dots */}
          <div className='carousel-indicators'>
            {subPosts &&
              Array(subPosts.length)
                .fill(0)
                .map((el, ind) => {
                  return (
                    <button
                    key={uuidv4()}
                      type='button'
                      data-bs-target='#demo'
                      data-bs-slide-to={ind}
                      className={ind === 0 && 'active'}
                    />
                  )
                })}
          </div>
          {/* The slideshow/carousel */}
          <div className='carousel-inner'>
            {subPosts &&
              subPosts.map((pst, ind) => {
                return (<div className={`carousel-item ${ind===0 && 'active'}`} key={uuidv4()}>
                  <SingleCarouselPage blogs={pst} key={ind} navigateToSinglePage={navigateToSinglePage} currentBlogSet  getDate = {getDate}/>
                </div>)
              })}
         
          </div>
          {/* Left and right controls/icons */}
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#demo'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' />
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#demo'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' />
          </button>
        </div>
      </>
    </div>
  )
}


export default NewsCarosel
