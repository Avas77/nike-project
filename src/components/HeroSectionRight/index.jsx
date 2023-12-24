import React from "react";
import {
  bigShoe1,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../../assets/images";

const HeroSectionRight = () => {
  return (
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img
        src={bigShoe1}
        className="object-contain relative z-10"
        width={610}
        height={502}
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        <div className="border-2 flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-coral-red">
          <img src={thumbnailShoe1} alt="shoes" width={127} height={103} />
        </div>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img src={thumbnailShoe2} alt="shoes" width={127} height={103} />
        </div>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img src={thumbnailShoe3} alt="shoes" width={127} height={103} />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionRight;
