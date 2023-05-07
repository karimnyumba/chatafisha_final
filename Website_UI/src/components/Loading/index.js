import { Img, Text } from "components";
import React from "react";
import clsx from "clsx";

function Loading({className}) {
  return (
    <div>
      <div className={clsx("", className)}
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50%'
      }}
      >
        <Img
          src="images/img_cut_white_a700.svg"
          className="animate-pulse text-gray-300"
          alt="logo loading"
        />
        <Text
          className="ml-5 animate-pulse font-semibold text-left text-black"
          as="h6"
          variant="h6"
        >
          <>Loading...</>
        </Text>
      </div>
    </div>
  );
}

export default Loading;
