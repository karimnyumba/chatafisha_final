import React from "react";
import { useForm } from "react-hook-form";
import Modal from "components/adminComponents/Modal";
import ModalBody from "components/adminComponents/ModalBody";
import ModalFooter from "components/adminComponents/ModalFooter";
import ModalHeader from "components/adminComponents/ModalHeader";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    //name
    name: yup
      .string()
      .required("Please provide picker/organization name! ")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),

    //email
    email: yup
      .string()
      .required("Please provide your email address")
      .min(5, "email must be at least 5 characters")
      .max(50, "email must be at most 50 characters"),

    //registration
    registration: yup
      .number()
      .positive("id number can't be negative")
      .integer("id should !")
      .required("Please provide picker id "),
    //contact
    contact: yup
      .string()
      .required("Please provide your contact number! ")
      .min(5, "contact must be at least 5 characters")
      .max(50, "contact must be at most 50 characters"),

    //location
    location: yup.string().required("Please add location! "),
    //role
    picture: yup.string().required("Please select picker profile!"),
  })
  .required();

function AddPicker({ onClose, open }) {
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
      <ModalHeader>Add a Picker</ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-6 items-center mt-[29px] w-full ">
          <form onSubmit={onSubmit}>
            <div className="form-row row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="first Name"
                  //   {...addPicker('name')}
                  //   value={name}
                />
                {errors.name ? (
                  <div className="invalid-feedback">{errors.name?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Last Name"
                  //   {...addPicker('name')}
                  //   value={name}
                />
                {errors.name ? (
                  <div className="invalid-feedback">{errors.name?.message}</div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.registration ? "is-invalid" : ""
                  }`}
                  placeholder="Id Number"
                  //   {...register('registration')}
                  //   value={registration}
                />
                {errors.registration ? (
                  <div className="invalid-feedback">
                    {errors.registration?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.contact ? "is-invalid" : ""
                  }`}
                  placeholder="phone"
                  //   {...register('contact')}
                  //   value={contact}
                />
                {errors.contact ? (
                  <div className="invalid-feedback">
                    {errors.contact?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
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
              <label htmlFor="" className="text-xs">
                Picker profile image
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
            <div className="flex flex-row justify-between mb-3">
            <Button
              className="btn btn-danger  mt-3 sm:mt-0  sm:w-auto"
              color="primary"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="btn btn-success   mt-3 sm:mt-0  sm:w-auto"
              color="primary"
              onClick={onClose}
              type="submit"
            >
              Add Picker
            </Button>
          </div>
          </form>
         
        </div>
      </ModalBody>
    </Modal>
  );
}

export default AddPicker;
