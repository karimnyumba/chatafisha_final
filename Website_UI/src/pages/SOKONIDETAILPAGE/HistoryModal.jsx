import React from "react";
import Card from "components/adminComponents/Card";
import Typography from "components/adminComponents/Typography";
import CardHeader from "components/adminComponents/CardHeader";
import CardBody from "components/adminComponents/CardBody";
import Modal from "components/adminComponents/Modal";
import ModalBody from "components/adminComponents/ModalBody";
import ModalFooter from "components/adminComponents/ModalFooter";
import ModalHeader from "components/adminComponents/ModalHeader";
import ProgressBar from "components/adminComponents/ProgressBar";
import Badge from "components/adminComponents/Badge";
import { Img, Information } from "components";
import Button from "components/adminComponents/Button";
import useFetch from "hooks";
import { useGlobalContext } from "context";

const authorsTableData = [
    {
      id: 1,
      name: "Baraka Ramadhani",
      loc: " Mbezi, Dar es salaam",
      content: "50Kgs of PET",
      date: "23/04/18",
    },
    {
      id: 2,
      name: "Janneth Hulingo",
      loc: " Mbezi, Dar es salaam",
      content: "500Kgs of PS",
      date: "11/01/19",
    },
    {
        id: 3,
        name: "Baraka Ramadhani",
        loc: " Mbezi, Dar es salaam",
        content: "50Kgs of PET",
        date: "23/04/18",
      },
      {
        id: 4,
        name: "Janneth Hulingo",
        loc: " Mbezi, Dar es salaam",
        content: "500Kgs of PS",
        date: "11/01/19",
      },
  ];
 
function HistoryModal({ onClose, open, pid }) {
  const { user_details, generateFormattedDateTime, addition, isCollectionAdded } = useGlobalContext()
   const { obtainData, data, loading, error } = useFetch()
   React.useEffect(() => {
     user_details && pid && obtainData('user/collection_history/'+pid, 'get',{}, {'headers':{
      token: user_details?.token,
      
     }} )
   }, [pid, user_details, isCollectionAdded])

  return (
    <Modal closeModal={onClose} open={open}>
      <ModalBody>
      <div >
        <CardHeader
          variant="gradient"
          color="teal-900"
          title="Validators"
          className="mb-1 mt-1 p-4 bg-green_403  "
        >
            <div className="flex justify-between items-center"> 
        <Typography as="div" variant="h3">
        Collector History
      </Typography>
      <div className="cursor-pointer font-syne  "  onClick={onClose}>
        <Typography as="div" variant="h3" >
       X
      </Typography>
      </div>
      </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll overflow-y-scroll px-0 pt-0 pb-2 ">
        <div>
          {error && <Information msg={'There is an error, Please check your internet connection!'} color={'danger'}/>}
        </div>
          <table className="w-full  table-auto">
            <thead>
              <tr>
                {["SN", "type", "Amount(Kg)", "Date", "Validated(By)"].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-1 px-2 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {data && data.data.map(
                (
                  { collectionID:key,
                  type, qnty:amount,collected_date,
                  admin_name
                    }, id
                ) => {
                  const className = `py-1 px-2 ${
                    id === data.data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  const dateTime= generateFormattedDateTime(collected_date).split(',');
                  const date = dateTime[0].trim();
                  const time = dateTime[1].trim();
             
                  return (
                    <tr key={key}>
                      <td className={className}>
                        <Typography className='text-xs font-semibold text-blue-gray-600'>
                          {id}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant='small'
                          className='mb-1 block text-xs font-medium text-blue-gray-600'
                        >
                          {type}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant='small'
                          className='mb-1 block text-xs font-medium text-blue-gray-600 text-center'
                        >
                          {amount}
                        </Typography>
                      </td>

                      <td className={className}>
                        <Typography className='text-xs font-semibold text-blue-gray-600'>
                          <div className='d-flex flex-column'>
                            <small className='text-dark'>{date}</small>
                            <small className='text-muted'>{time}</small>
                          </div>
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant='small'
                          className={`mb-1 block text-xs font-medium text-blue-gray-600 ${
                            (admin_name) ? 'text-success' : 'text-danger'
                          }`}
                        >
                          {(admin_name === null) ?  'Not Validated': admin_name.toUpperCase()}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <a href='#'>view</a>
                      </td> */}
                    </tr>
                  )
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </div>
       
      </ModalBody>
    </Modal>
  );
}

export default HistoryModal;
