import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Information, Text } from "components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import useFetch from "hooks";
import BlogDescription from "components/BlogDescription";
import ApiErrorDisplay from "components/ApiErrorDisplay";
import NewsGrid from "./NewsGrid";
import NewsCarosel from "./NewsCarosel";
function NewsContentDisplay({type}) {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigateToSinglePage = (card) => {
    console.log(card.id)
    dispatch({ type: 'CURRENT_BLOG_ARTICLE', payload: card })
    navigate(`/news_detail/blog/${card.id}`)
  }
  const { dispatch } = useGlobalContext()
  const getDate = () => {
    const currentDate = new Date()

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = currentDate.toLocaleDateString('en-US', options)
    return formattedDate
  }
  
  const cards = [
    {
      id:1,
      img: "images/voice.png",
      title: "Join our open house event",
      content: "Chatafisha will be hosting it’s second open house event this year to share our"
    },
    {
      id:2,
      img: "images/chatafisha final.00_00_21_23 1.png",
      title: "Rangi Chanya Festival",
      content: "Exciting news! CHATAFISHA is hosting 'RANGI CHANYA'  to drive community impact through a circular economy. "
    },
    {
      id:3,
      img: "images/wasteInitiative.png",
      title: "Waste Collection Initiative",
      content: "Chatafisha and Nipe Fagio are partnering in a waste collection initiative..."
    },
    {
      id:4,
      img: "images/near.jpeg",
      title: "Building on NEAR Protocol",
      content: "As a Decentralized Autonomous Organization (DAO), we are building our platform on..."
    },
  
  ];
  const [blogs, setBlogs] = React.useState(cards);
  const { data, isLoading, error, obtainData } = useFetch()
  React.useEffect(() => {
    let url, method;
    if(!data){
    obtainData(
      (url = 'blog/article_data'),
      (method = 'get')
    )
  }
  else{
    setBlogs(data.data)
  }

  }, [data])
  return (
    <>
      <div className='w-full h-[290px]'>
        {isLoading && (
          <div className='m-3'>
            <Information msg={'Fetching blogs for you!!'} color={'warning'} />
          </div>
        )}
        {error && (
          <ApiErrorDisplay
            errObject={
              new Map([
                [
                  'ERR_NETWORK',
                  {
                    msg: "Can't fetch blogs because of Network Error, Please check your internet connection!",
                    color: 'danger',
                  },
                ],
              ])
            }
            errCode={error.code}
          />
        )}
        <div>
          {type === 'carousel' && (
            <NewsCarosel
              blogs={blogs}
              navigateToSinglePage={navigateToSinglePage}
              getDate={getDate}
            />
          )}
          {type === 'grid' && (
            <NewsGrid
              blogs={blogs}
              pages={10}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              navigateToSinglePage={navigateToSinglePage}
              getDate={getDate}
            />
          )}{' '}
          {/**pages={blogs.pages} blogs={blogs.posts}**/}
        </div>
      </div>
      <div></div>
    </>
  )
}

export { NewsContentDisplay };
