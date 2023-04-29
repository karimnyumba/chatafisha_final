import React from "react";
import { Text, Img, Button, NewsCarousel } from "components";
import { useNavigate } from "react-router-dom";

function NEWSUPDATESPAGE() {
    const [navbarOpen, setNavbarOpen] = React.useState(true);
    const navigate = useNavigate();

    return (
        <div
            className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-syne h-[800px] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_homepage.png')" }}
        >
            <nav className=" w-full flex flex-wrap items-center justify-between px-2 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full  flex justify-between  md:w-auto  ">
                        <div className="flex">
                            <Text
                                className="font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-left w-auto"
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
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-white sm:flex   md:hidden  lg:hidden   outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center mt-[-35px] sm:ml-[-50px]  lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? "block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row sm:mt-[50px]  md:mt-[20px]  list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Text
                                    className="font-medium mt-[3px] text-black_900 text-left w-auto transform hover:scale-y-90 transition-transform"
                                    variant="body2"
                                    onClick={() => navigate("/")}
                                >
                                    Home{" "}
                                </Text>
                            </li>

                            <li className="flex items-center">
                                <Text
                                    className="common-pointer font-medium ml-[39px] mt-1 text-black_900 text-left w-auto  transform hover:scale-x-90 transition-transform"
                                    variant="body2"
                                    onClick={() => navigate("/loginpage")}
                                >
                                    Login
                                </Text>
                            </li>

                            <li className="flex items-center">
                                <Text
                                    className="bg-bluegray_100 font-medium h-[22px] ml-[37px] px-[9px] py-[3px] rounded-[11px] text-black_900 text-left text-shadow-ts1 w-[104px]  transform hover:scale-x-90 transition-transform"
                                    variant="body2"
                                >
                                    connect wallet
                                </Text>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="flex flex-wrap gap-8 space-x-16 mt-[50px]">
                <div className="flex flex-col">
                    <div className="ml-8">
                        <svg
                            width="70"
                            height="50"
                            className="common-pointer  float-left mt-1 mr-8"
                            viewBox="0 0 74 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.7313 1.61938L1.53076 26.8199L26.7313 52.0205M72.1089 26.8199H2.23654"
                                stroke="black"
                                stroke-width="2.83929"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        {/* <Img
                            src="images/img_arrowright.svg"
                            className="common-pointer h-[80px] w-[70px] float-left"
                            alt="arrowright"
                        /> */}
                        <Text
                            className="font-bold md:ml-[0] md:mt-0 mt-0.5 text-dark text-left w-auto"
                            as="h2"
                            variant="h2"
                        >
                            <span className="decoration-solid" 
                            style={{
                                color:"white",
                                fontSize:"40px",
                                WebkitTextStroke:'1px black'
                            }}> NEWS &</span>
                            <br />
                            <strong className="indent-0.5" style={{fontSize:"40px"}}>{"      "}UPDATES</strong>
                        </Text>
                    </div>
                    <div className="flex flex-row flex-wrap gap-8 space-x-16">
                        <Text
                            className=" font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic  text-left"
                            as="h4"
                            variant="h4"
                        >
                            <strong>
                                Get all the latest news <br />
                                happening around the
                                <br />
                                Chatazen community.
                            </strong>
                        </Text>
                        <Text
                            className="font-normal ml-0.5 md:ml-[0] mt-[13px] not-italic  text-left sm:text-sm"
                            as="h6"
                            variant="h6"
                        >
                            <strong>
                                Stay up-to-date with all the relevant tech
                                <br />
                                we use day to day.
                                <br />
                            </strong>
                            <span
                            className="text-sm sm:text-xs"
                            style={{color:"#7A7A7A"}}
                            >
                                We are a DAO working on Web3 environment. With the
                                <br />
                                pace that technology is moving, it gets overwhelming
                                <br />
                                trying to grasp everything. Here is what we’ve been upto.
                            </span>
                        </Text>
                    </div>
                </div>
                <div className="common-pointer bg-black_900 flex sm:flex-1 flex-col gap-[60%] items-end justify-start sm:mt-[-23px] mt-0.5 p-[9px] w-[210px] md:w-[50%] md:h-[150px] rounded-[23px] w-[120px] sm:w-[120px] sm:h-[150px] sm:mr-5">
                    <Img
                        src="images/img_plus.svg"
                        className="h-4 mt-0.5 w-4"
                        alt="plus"
                    />

                    <Text
                        className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[99px] text-left text-white_A700 sm:mt-[-15px] sm:mr-[65%] md:mr-[75%]"
                        variant="body2"
                        onClick={() => {
                            navigate("/news_and_updates");
                        }}
                    >
                        <>
                            News &<br />
                            Updates
                        </>
                    </Text>
                </div>
            </div>

            <div className="flex flex-col items-center justify-start mt-[50px] shadow-bs w-full">
                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1175px] overflow-auto sm:pr-5 pr-[25px] w-full sm:w-[100%]">
                    <NewsCarousel />
                </div>
            </div>
        </div>
    );
}

export default NEWSUPDATESPAGE;
