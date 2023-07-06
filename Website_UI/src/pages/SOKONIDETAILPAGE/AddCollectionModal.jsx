import React from "react";
import { useForm } from "react-hook-form";
import Modal from "components/adminComponents/Modal";
import ModalBody from "components/adminComponents/ModalBody";
import ModalFooter from "components/adminComponents/ModalFooter";
import ModalHeader from "components/adminComponents/ModalHeader";
import { Button } from "components";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    //amount
    amount: yup.string().required("Please provide Amont! "),
    //type of plastic
    type: yup.string().required("Please select your type of plastic"),

    //picture of proof
    picture: yup.string().required("Please select picture!"),
  })
  .required();


function AddCollection({ onClose, open }) {
  const options = [
    { value: "PET", label: "PET" },
    { value: "HDPE", label: "HDPE" },
    { value: "PVC", label: "PVC" },
    { value: "LDPE", label: "LDPD" },
    { value: "PP", label: "PP" },
    { value: "PS", label: "PS" },
    {
      value: "OTHER",
      label: "OTHER",
    },
  ];

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Modal closeModal={onClose} open={open}>
      <ModalHeader>Add a Collection</ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-6 items-center mt-[29px] w-full ">
          <form onSubmit={onSubmit}>
            <div className="form-row row">
              <div className="col-md-12 mb-3">
                <input
                  type="number"
                  className={`form-control ${
                    errors.amount ? "is-invalid" : ""
                  }`}
                  placeholder="Amount collected in (kg)"
                  //   {...addPicker('name')}
                  //   value={name}
                />
                {errors.name ? (
                  <div className="invalid-feedback">
                    {errors.amount?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>

              <label htmlFor="" className="text-xs">
                Type of plastic Collected
              </label>
              <div className="col-md-12 mb-3">
                <Select options={options} className="text-xs"/>
              </div>

              <label htmlFor="" className="text-xs">
                Add a picture of proof
              </label>
              <div className="col-md-12 mb-3">
                <input
                  type="file"
                  className={`form-control ${
                    errors.location ? "is-invalid" : ""
                  }`}
                  placeholder="location"
                  //   {...register('contact')}
                  //   value={contact}
                />
                {errors.location ? (
                  <div className="invalid-feedback">
                    {errors.location?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <Button
                className="btn btn-danger mt-3 sm:mt-0  sm:w-auto"
                color="primary"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className="btn btn-success mt-3 sm:mt-0  sm:w-auto"
                color="primary"
                onClick={onClose}
              >
                Add Collection
              </Button>
            </div>{" "}
            <ModalFooter></ModalFooter>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default AddCollection;
