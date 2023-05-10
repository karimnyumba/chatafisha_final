import React from 'react'

const BlogDescription = ({content}) => {
 const[showMore, setShowMore] = React.useState(false);
  return (
    <div>
      <p class='text-gray-600'>
        {showMore ? content : content.substring(0, 300)}
      </p>
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