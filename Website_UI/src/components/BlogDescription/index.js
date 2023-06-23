import React,{useRef, useEffect} from 'react'

const BlogDescription = ({content}) => {
 const[showMore, setShowMore] = React.useState(false);
 const contentRef = useRef();
 useEffect(
  ()=>{
    const text = contentRef.current.innerText;
    contentRef.current.innerHTML = text;
  }, [contentRef]
 )
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: showMore ? content : content.substring(0, 300),
        }}
        className='text-gray-600'
        ref={contentRef}
      ></p>

      {content.length >= 300 && (
        <button
          className='btn btn-outline-primary'
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default BlogDescription