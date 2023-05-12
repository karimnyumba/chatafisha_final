import React,{useState} from "react";
import PageModal from "./pageModal";
import { Text, Img, Button, NavBar } from "components";
import { useNavigate } from "react-router-dom";
const LOGINPAGEPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <div
        className="bg-cover bg-repeat bg-white_A700 flex flex-col font-syne h-[100vh] sm:h-[100%] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_loginpage.png')" }}
      >
        <NavBar />
        <div className="flex flex-row md:flex-wrap sm:flex-wrap gap-10 items-center justify-start max-w-[1123px] mb-[55px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col justify-start w-[48%] md:w-full">
            <div className="h-[125px] md:ml-[0] ml-[15px] relative w-[86%] sm:w-full sm:mt-15">
              <Text
                className="m-auto text-black_900 text-left mt-25 "
                as="h1"
                variant="h1"
              >
                <>
                  Karibu
                  <br />
                  Chatafisha
                </>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[134px] mt-[100px] text-black_900 text-left w-auto sm:mt-[20px]"
              as="h2"
              variant="h2"
            >
              Let’s get started
            </Text>
            <div className="flex flex-col gap-6 items-center mt-[29px] w-full">
              <Button
                className="bg-gray_300 cursor-pointer font-medium leading-[normal] min-w-[529px] sm:min-w-full text-[18.38px] text-black_900 text-center w-auto"
                shape="RoundedBorder14"
                size="sm"
                variant="FillBluegray300"
                onClick={() => openModal()}
              >
                Open an account
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[529px] sm:min-w-full text-[18.38px] text-black_900 text-center w-auto"
                shape="RoundedBorder14"
                size="sm"
                variant="FillBluegray100"
                onClick={() => navigate("/loginform")}
              >
                Already have account
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-start w-1/2 md:w-full">
            <div className="h-[344px] md:h-[345px] mr-[3px] mt-[50px] relative w-full sm:h-[374px]">
              <Img
                src="images/img_rectangle4.png"
                className="h-[344px] m-auto object-cover rounded-[16px] w-full"
                alt="rectangleFour"
              />
              <div className="absolute mb-0 top-[0] right-0 h-16 w-16">
                <Img
                  src="images/img_cut_white_a700.svg"
                  className="h-[51px] md:ml-[0] ml-[404px] w-auto ml-[0.5rem] p-3"
                  alt="cut"
                />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[118px] h-max inset-[0] justify-center mx-auto mt-[220px] sm:mt-[150px] w-[85%]">
                <Text
                  className="font-semibold mr-[25px] text-left text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  <>
                    Pata thamani
                    <br />
                    Earn carbon credits through the offsets of plastic waste
                    into usable goods and building materials.
                  </>
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-2 md:gap-2 sm:gap-3 sm:ml-[10px] md:ml-[15px] items-center  justify-center w-full mt-1">
              <div className="common-pointer bg-black_900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start sm:mt-0 mt-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px]">
                <Img
                  src="images/img_plus.svg"
                  className="h-4 mt-0.5 w-4"
                  alt="plus"
                />
                <Text
                  className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700"
                  variant="body2"
                  onClick={() => navigate("/news_and_updates")}
                >
                  <>
                    News &<br />
                    Updates
                  </>
                </Text>
              </div>
              <div className="common-pointer bg-green_403 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-[9px] rounded-[23px] w-[120px] sm:w-[120px] ">
                <Img
                  src="images/img_plus.svg"
                  className="h-4 mt-0.5 w-4"
                  alt="plus_One"
                />
                <div className="flex flex-col items-start justify-start mr-1 w-auto md:w-full">
                  <Text
                    className="font-bold  text-center ml-[10px] text-white_A700"
                    variant="body2"
                  >
                    Sokoni
                  </Text>
                  <Text
                    className="font-bold text-center ml-[10px] text-white_A700"
                    variant="body2"
                  >
                    Market place
                  </Text>
                </div>
              </div>

              <div className="common-pointer bg-indigo_A200 flex sm:flex-1 flex-col gap-[45px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]">
                <Img
                  src="images/img_plus.svg"
                  className="h-4 w-4"
                  alt="plus_Two"
                  
                />
                <Text
                  className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700"
                  variant="body2"
                  onClick={() => navigate("/tupe_support")}

                >
                  <>
                    Tupe
                    <br />
                    Support
                  </>
                </Text>
              </div>
              <div className="common-pointer bg-blue_400 flex sm:flex-1 flex-col gap-[59px] items-end justify-start mb-0.5 p-2 rounded-[23px] w-[120px] sm:w-[120px]">
                <Img
                  src="images/img_plus.svg"
                  className="h-4 md:ml-[0] ml-[85px] w-4"
                  alt="plus_Three"
                />
                <Text
                  className="font-bold mb-2.5 md:ml-[0] ml-[5px] mr-[31px] text-left text-white_A700"
                  variant="body2"
                >
                  Tufahamu
                </Text>
                <PageModal onClose={closeModal} open={modalOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LOGINPAGEPage;
