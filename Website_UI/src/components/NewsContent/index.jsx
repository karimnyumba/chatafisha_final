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
  const { dispatch, blogs } = useGlobalContext()
  const getDate = () => {
    const currentDate = new Date()

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = currentDate.toLocaleDateString('en-US', options)
    return formattedDate
  }
  const { data, isLoading, error, obtainData } = useFetch()
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  React.useEffect(() => {
    let url, method;
    if(!data && blogs.length === 0){
    obtainData(
      (url = 'blog/article_data'),
      (method = 'get')
    )
  }
  else{
    data &&
    dispatch({ type: 'FILL_BLOGS', payload: data.data })
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
              capitalizeFirstLetter={capitalizeFirstLetter}
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
              capitalizeFirstLetter={capitalizeFirstLetter}
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
