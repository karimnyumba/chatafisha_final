import React from 'react'
import { Text } from 'components'
import { v4 as uuidv4 } from 'uuid'
import BlogDescription from 'components/BlogDescription'
const NewsGrid = ({blogs, pages, setCurrentPage, currentPage, navigateToSinglePage, getDate, currentBlogSet}) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);

  }
  const wrapPages = (page) => {
    if (page > pages) {
      return pages
    }
    if (page < 1) {
      return 1
    }
    return page
  
  }
 return (
   <section className=''>
     <div className='row d-flex justify-content-center '>
       {blogs.map((card, ind) => {
         return (
           <div className={`m-3  col-md-3 col-sm-12`} key={uuidv4()}>
             <div
               className='card p-5'
               style={{ width: '18rem', height: '30rem' }}
             >
               <img
                 src={'http://139.162.249.220:9292/' + card.img}
                 className='card_img'
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
                     <BlogDescription
                       content={card.content.substring(0, 299)}
                     />
                   )}
                   <span
                     className='text-primary page_links '
                     onClick={() => navigateToSinglePage(card)}
                   >
                     Read More...
                   </span>
                 </Text>
               </div>
               <div className='card-footer'>
                 <div className='row'>
                   <div className='col-md-6 '>
                    <div className='profile-photo'></div>
                    <small className='text-primary profile-name'>By John Doe</small>
                   </div>
                   <small className='mb-3 text-muted col-md-6'>{getDate()}</small>
                 </div>
               </div>
             </div>
           </div>
         )
       })}
     </div>
     <div className='page-pagination'>
       <nav aria-label='Page navigation example'>
         <ul className='pagination'>
           <li
             className={`page-item ${currentPage === 1 && 'disabled'}`}
             onClick={() => {
               handlePageChange(wrapPages(currentPage - 1))
             }}
           >
             <a className='page-link' >
               Previous
             </a>
           </li>
           {Array(pages).fill(0).map((page, index) => {
             return (
               <li
                 className={`page-item ${currentPage === index+1 && 'active'}`}
                 onClick={() => handlePageChange(index+1)}
               >
                 <a className='page-link'>
                   {index+1}
                 </a>
               </li>
             )
           })}
           <li
             className={`page-item ${currentPage === pages && 'disabled'}`}
             onClick={() => {
               handlePageChange(wrapPages(currentPage + 1))
             }}
           >
             <a className='page-link'>
               Next
             </a>
           </li>
         </ul>
       </nav>
     </div>
   </section>
 )
}

export default NewsGrid