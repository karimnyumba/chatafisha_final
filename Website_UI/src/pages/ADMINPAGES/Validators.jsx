import React, { useEffect, useState } from "react";
import Card from "components/adminComponents/Card";
import Typography from "components/adminComponents/Typography";
import CardHeader from "components/adminComponents/CardHeader";
import CardBody from "components/adminComponents/CardBody";
import Menu from "components/adminComponents/Menu";
import MenuItem from "components/adminComponents/MenuItem";
import ProgressBar from "components/adminComponents/ProgressBar";
import Badge from "components/adminComponents/Badge";
import { Img } from "components";
import Button from "components/adminComponents/Button";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "context";
import useFetch from "hooks";
import { Button as Btn, Modal,  img } from 'bootstrap'
import SwiperCore from "swiper";
import  { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';



const ValidationsTableData = [
  {
    id: 12354,
    name: "Baraka Ramadhani",
    validation: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.40 1.png",
    validations: ["Manager", "Organization"],
    pending: true,
    progress: 60,
    date: "23/04/18",
  },
  {
    id: 18845,
    name: "Janneth Hulingo",
    validation: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.png",
    validations: ["Programator", "Developer"],
    pending: false,
    progress: 30,
    date: "11/01/19",
  },
];
const Validators = () => {
  const { obtainData, data, isLoading, error } = useFetch()
  const { user_details, generateFormattedDateTime } = useGlobalContext()
  React.useEffect(() => {
    {
      user_details.token &&
        obtainData(
          `user/collection_history`,
          'get',
          {},
          {
            headers: {
              token: user_details?.token,
            },
          }
        )
    }

  }, [user_details])
  if(data){
    data.data.sort((a, b)=> new Date(b.collected_date) -  new Date(a.collected_date));
  }
 
  return (
    <div className="flex justify-center items-center mr-5">
      <Card>
        <CardHeader
          color="teal-900"
          title="Validators"
          className="mb-2 mt-4 p-6 bg-blue-800 "
        >
          <Typography variant="h6" color="white">
            Validations
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              
                {["S/N", "Type", "Amount","Image","Picker Name","Status", "Date", "Validate"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-1 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              
            </thead>
            <tbody>
              {data &&user_details&& data.data.map( (collectionDetails, key) => {
                  const className = `py-2 px-5 ${
                    key === data.data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  collectionDetails.className = className;
                  collectionDetails.no=key;
                  collectionDetails.user_details = user_details;
                  collectionDetails.generateFormattedDateTime = generateFormattedDateTime;
                  

                  return (
                    
                    <SingleCollection {...collectionDetails} />
                  
              )
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};
const SingleCollection = ({
  className,
  type,
  qnty: amount,
  firstname,
  lastname,
  collectionID,
  images,
  collected_date: date,
  admin_name,
  no,
  user_details,
  generateFormattedDateTime
}) => {

  const [changes, setChanges] = useState(admin_name);
  const {obtainData,  error, isLoading, data} = useFetch();
  const handleValidation = (collectionID) => {
    obtainData(
      `user/validate_collection/${collectionID}`,
      'get',
      {},
      {
        headers: {
          token: user_details.token,
        },
      }
    )
  }
  useEffect(
    ()=>{
      data && setChanges(user_details.user_data.name)

    }, [data]
  )
  const dateTime= generateFormattedDateTime(date).split(',');
  const dt = dateTime[0].trim();
  const tm= dateTime[1].trim();
  return (
    <tr key={collectionID}>
      <td className={className}>
        <Typography
          variant='small'
          className='text-xs font-medium text-blue-gray-600'
        >
          {no}
        </Typography>
      </td>
      <td className={className}>
        <Typography
          variant='small'
          className='text-xs font-medium text-blue-gray-600 text-bold'
        >
          {type}
        </Typography>
      </td>
      <td className={className}>
        <Typography
          variant='small'
          className='text-xs font-medium text-blue-gray-600'
        >
          {amount}
        </Typography>
      </td>
      <td className={className}>
        <Typography
          variant='small'
          className='text-xs font-medium text-blue-gray-600'
        >
         <ImageModal images={images} imageAlt={firstname} weight={amount} ind={no}/>
        </Typography>
      </td>
      <td className={className}>
        <Typography
          variant='small'
          className='text-xs font-medium text-blue-gray-600'
        >
          <div>
            <small className='d-block mb-2 text-capitalize'>{firstname}</small>
            <small className='d-block mb-2 text-capitalize'>{lastname}</small>
          </div>
        </Typography>
      </td>
      <td className={className}>
        <button>
          <Badge
            variant='gradient'
            color={!changes ? 'primary' : 'success'}
            className='py-0.5 px-2 text-[11px] font-medium'
          >
            {!changes ? 'Pending' : 'Validated'}
          </Badge>
        </button>
      </td>
      <td className={className}>
        <div className='w-10/12'>
          <Typography
            variant='small'
            className='mb-1 block text-xs font-medium text-blue-gray-600'
          >
            <div>
              <small className='d-block mb-2'>{dt}</small>

              <small>{tm}</small>
            </div>
          </Typography>
          {/* <ProgressBar
                            value={progress}
                            variant="gradient"
                            color={progress === 100 ? "green" : "blue"}
                            className="h-1"
                          /> */}
        </div>
      </td>
      <td className={className}>
        {!changes ? (
          !isLoading ? (
            <button
              className='btn btn-outline-success btn-sm'
              onClick={() => {
                handleValidation(collectionID)
              }}
            >
              Validate
            </button>
          ) : (
            <div
              className='spinner-grow spinner-grow-sm text-center text-success '
              role='status'
            >
              <span className='sr-only'>Loading...</span>
            </div>
          )
        ) : (
          ''
        )}
      </td>
    </tr>
  )
}



const ImageModal = ({ images, imageAlt }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <a href='#' onClick={openModal} className='text-blue-500'>
          View Images
        </a>
      </div>

      {modalOpen && (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-opacity-50'>
          <div className='bg-white rounded-lg shadow-lg p-4 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 relative'>
            <button
              className='absolute top-2 right-2 text-white btn-close hover:text-gray-80 bg-danger p-2  '
              onClick={closeModal}
            >
              
            </button>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {images.map(({ image_url, imageID, active }, index) => (
                <SwiperSlide key={imageID} className='swiper-slide'>
                  <img
                    src={image_url}
                    alt={`${imageAlt} ${index}`}
                    className=' slide_image mx-auto'
                    style={{
                      width: '400px',
                      height: '400px',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
};



export default Validators;
