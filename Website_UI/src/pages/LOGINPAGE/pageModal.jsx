import React from "react";
import Modal from "../../components/adminComponents/Modal";
import ModalBody from "../../components/adminComponents/ModalBody";
import ModalFooter from "../../components/adminComponents/ModalFooter";
import ModalHeader from "../../components/adminComponents/ModalHeader";
import { Button } from "components";
import { useNavigate } from "react-router-dom";

function PageModal({ onClose, open }) {
    const navigate = useNavigate();
  return (
    <Modal closeModal={onClose} open={open}>
      <ModalHeader>Choose account type</ModalHeader>
      <ModalBody>
      <div className='flex flex-col gap-6 items-center mt-[29px] w-full '>
              <Button
                className='bg-gray_300 cursor-pointer font-medium leading-[normal] min-w-[400px] sm:min-w-full text-[18.38px] text-black_900 text-center w-auto'
                shape='RoundedBorder14'
                size='sm'
                variant='FillBluegray300'
                onClick={() => navigate('/student_reg_form')}
              >
                Student
              </Button>
              <Button
                className='cursor-pointer font-medium leading-[normal] min-w-[400px] sm:min-w-full text-[18.38px] text-black_900 text-center w-auto'
                shape='RoundedBorder14'
                size='sm'
                variant='FillBluegray100'
                onClick={() => navigate('/registerform')}
              >
                Normal User
              </Button>
            </div>
      </ModalBody>
      <ModalFooter>
        <Button
          className="btn btn-primary ml-[40%]  mt-3 sm:mt-0  sm:w-auto"
          color="primary"
          onClick={onClose}
          type="submit"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default PageModal;
