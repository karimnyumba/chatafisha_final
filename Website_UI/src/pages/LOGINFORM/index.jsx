import React from "react";
import { Text, Img, Button } from "components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Information } from "components";
import useFetch from "hooks";

import { Navigate, redirect } from "react-router-dom";

//Validation Schema
const schema = yup
  .object({
    //email
    email: yup
      .string()
      .required("Please provide email!")
      .min(5, "email should be at least 5 characters")
      .max(50, "email must be at most 50 characters"),

    //password
    password: yup
      .string()
      .required("Please provide your password! ")
      .min(4, "password must be at least 4 characters")
      .max(50, "password must be at most 50 characters"),
  })
  .required();
const LoginForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //Watch states
  const email = watch("email");
  const password = watch("password");

  //Set fetch
  const { data, isLoading, error, obtainData } = useFetch();
  //Handle Submit
  const onSubmit = (data) => {
    const { email, password } = data;
    obtainData("user/login_credential", "post", {
      email,
      password,
    });
  };
  if (error) {
    console.log(error);
  }
  if (data) {
    <Information msg={data.aset} color="success" />;
    localStorage.setItem(
      "Chatafisha",
      JSON.stringify({
        token: data.token,
      })
    );
    return <Navigate to={"/homepage"} />;
  }
  if (isLoading) return <div>Loading....</div>;

  return (
    <main
      className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne h-[800px] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
      style={{ backgroundImage: "url('images/img_homepage.png')" }}
    >
      <section className="d-flex flex-column">
        <article className="m-auto mb-3 ">
          {error && error.code === "ERR_BAD_REQUEST" && (
            <Information msg={error.response.data.aset} color="danger" />
          )}
        </article>
        <article className="registration   p-4 rounded shadow-lg w-75 m-auto mt-3">
          <div class="mb-3 pb-1border-b-2 text-center font-base text-gray-700">
            <div className="flex justify-center ">
              <Text
                className="font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                CHATAFISHA
              </Text>
              <Img
                src="images/img_mainlogo_black_901.svg"
                className="h-8 md:ml-[13px] ml-[15px] md:mt-0 mt-[5px] w-auto "
                alt="mainlogo"
              />
            </div>
          </div>
          <div class="mb-3 text-center font-semibold text-black">
            Login to your account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row row">
              <div className="col-md-12 mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  {...register("email")}
                  value={email}
                />
                {errors.email ? (
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="password"
                  {...register("password")}
                  value={password}
                />
                {errors.password ? (
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                ) : (
                  <div className="text-success"></div>
                )}
              </div>
            </div>
            <div class="flex justify-between">
              <label class="block text-gray-500 font-bold mb-2">
                <input type="checkbox" class="leading-loose text-pink-600" />{" "}
                <span class="p text-sm text-gray-600 leading-snug">
                  {" "}
                  Remember Me{" "}
                </span>
              </label>{" "}
            </div>

            <div className="text-center">
              <button className="btn btn-primary form-control" type="submit">
                login
              </button>
            </div>
            <div class="my-2 pb-1 border-b-2 text-center font-base text-gray-700">
           <span> <a class="text-blue-500" href="/">home</a></span>
           <label class="block text-gray-500 font-normal mb-1">
                <a
                  href="#"
                  class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                >
                  <span>Forgot Password?</span>
                </a>
              </label>
              <button className=" btn btn-secondary text-left" >
                create an account here
              </button>
          </div>
          {/* <hr className="mb-6 border-b-1 border-blueGray-600" /> */}

          <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
              </div>
       
          </form>
        </article>
      </section>
    </main>
  );
};

export default LoginForm;
