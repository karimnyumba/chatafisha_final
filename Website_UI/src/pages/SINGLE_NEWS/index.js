import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from 'context';
import { NavBar, NewsContentDisplay } from 'components';
import { useNavigate } from 'react-router-dom';

const SingleNews = () => {
 const {blog_id} = useParams();
 const navigate = useNavigate() 
 //fetch the blog details..
const getDate = () => {
  const currentDate = new Date()

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = currentDate.toLocaleDateString('en-US', options)
  return formattedDate
}
 const {article} = useGlobalContext();
 React.useEffect(
  ()=>{
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: Enables smooth scrolling
      })
    }
    scrollToTop()
  }, [article]
 )
 if(!article){
  return <h2 className='section-title'>Fierylion implement the single blog functionality to fetch this missing blog!!!!!!</h2>
 }
 
 return (
   <>
     <div>
       <NavBar />
     </div>
     <section className='container mt-5'>
       <article>
         <div>
           <h1 className='text-uppercase'>{article.title}</h1>
           <div className='d-flex align-items-center mt-3'>
             <div className='profile-photo me-3'></div>
             <div className='d-flex flex-column'>
               <span className='mb-2 fw-bold'> By John Doe</span>
               <span className='text-muted'>{getDate()}</span>
             </div>
           </div>
         </div>
         <br />
         <hr />
       </article>
       <article>
         <div className='mt-5 border '>
           <img
             src={'http://139.162.249.220:9292/' + article.img}
             alt={article.title}
             className='img-fluid w-100'
           />
         </div>
       </article>
       <article>
         <div className='mt-5'>
           <p dangerouslySetInnerHTML={{ __html: article.content}}></p>
         </div>
       </article>
       <br />
       <hr />
       <div className=''>
         <div>
           <svg
             className='mx-auto'
             width='31'
             height='25'
             viewBox='0 0 31 25'
             fill='none'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path
               d='M15.7422 12.4216C15.7422 15.5212 14.8555 18.2849 13.4729 20.2472C12.0884 22.2123 10.2698 23.3032 8.37112 23.3032C6.47245 23.3032 4.65384 22.2123 3.26933 20.2472C1.88675 18.2849 1 15.5212 1 12.4216C1 9.32203 1.88675 6.5584 3.26933 4.59603C4.65384 2.63092 6.47245 1.54004 8.37112 1.54004C10.2698 1.54004 12.0884 2.63092 13.4729 4.59603C14.8555 6.5584 15.7422 9.32203 15.7422 12.4216Z'
               fill='white'
               stroke='black'
               strokewidth='2'
             ></path>
             <path
               d='M30.0001 11.8816C30.0001 14.9812 29.1133 17.7448 27.7307 19.7072C26.3462 21.6723 24.5276 22.7632 22.6289 22.7632C20.7303 22.7632 18.9116 21.6723 17.5271 19.7072C16.1446 17.7448 15.2578 14.9812 15.2578 11.8816C15.2578 8.78199 16.1446 6.01836 17.5271 4.05599C18.9116 2.09088 20.7303 1 22.6289 1C24.5276 1 26.3462 2.09088 27.7307 4.05599C29.1133 6.01836 30.0001 8.78199 30.0001 11.8816Z'
               fill='white'
               stroke='black'
               strokewidth='2'
             ></path>
             <ellipse
               cx='9.66719'
               cy='17.0662'
               rx='3.24043'
               ry='4.59062'
               fill='black'
             ></ellipse>
             <ellipse
               cx='23.925'
               cy='17.0662'
               rx='3.24043'
               ry='4.59062'
               fill='black'
             ></ellipse>
           </svg>
         </div>
       </div>
       <br />
       <article>
         <div className='text-center'>
           <h3>What else to Read!!!</h3>
         </div>
         <div>
           <NewsContentDisplay type={'carousel'} />
         </div>
       </article>
       <article>
         <div className='text-center mb-5'>
           <button
             className='btn btn-outline-primary'
             onClick={() => navigate('/news_detail')}
           >
             {' '}
             Show More Posts{' '}
           </button>
         </div>
       </article>
     </section>
   </>
 )
}

export default SingleNews