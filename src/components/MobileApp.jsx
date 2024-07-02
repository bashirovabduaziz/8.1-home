import React from "react";
import IOS from "../assets/images/ios.svg";
import Android from "../assets/images/android.svg";
import Crossplatform from "../assets/images/crossplatform.svg";
import Swift from "../assets/images/swift.svg";
import Kotlin from "../assets/images/kotlin.svg";
import Flutter from "../assets/images/flutter.svg";
import Phone from "../assets/images/phone.png";
import Bg from "../assets/images/background.png";

const MobileApp = () => {
  return (
    <div id="service1" className="mx-auto px-4 max-w-6xl py-20">
      <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
        Development of mobile <br /> applications
      </h1>
      <div className="flex items-center justify-between">
        <div className="w-[45%]">
          <p className="mb-7 text-2xl font-medium leading-10 text-[#18191f]">
            In collaboration with startups, we have learned how to create a
            creative and functional user interface for mobile applications.
          </p>
          <div className="mb-10 flex gap-4">
            <div className="w-[150px] rounded-lg bg-[#F4F7FF] p-3">
              <img className="h-14 w-14" src={IOS} alt="IOS Logo" />
              <p className="text-lg font-semibold leading-[30px]">iOS</p>
            </div>
            <div className="w-[150px] rounded-lg bg-[#F4F7FF] p-3">
              <img className="h-14 w-14" src={Android} alt="Android Logo" />
              <p className="text-lg font-semibold leading-[30px]">Android</p>
            </div>
            <div className="w-[150px] rounded-lg bg-[#F4F7FF] p-3">
              <img
                className="h-14 w-14"
                src={Crossplatform}
                alt="Crossplatform Logo"
              />
              <p className="text-lg font-semibold leading-[30px]">
                Crossplatform
              </p>
            </div>
          </div>
          <div>
            <p className="mb-8 text-[32px] font-extrabold leading-10 text-[#464359]">
              Technologies
            </p>
            <div className="flex gap-12">
              <div>
                <img className="mb-2 h-14 w-14" src={Swift} alt="Swift Logo" />
                <p className="text-xl font-semibold leading-[30px]">Swift</p>
              </div>
              <div>
                <img
                  className="mb-2 h-14 w-14"
                  src={Kotlin}
                  alt="Kotlin Logo"
                />
                <p className="text-xl font-semibold leading-[30px]">Kotlin</p>
              </div>
              <div>
                <img
                  className="mb-2 h-14 w-14"
                  src={Flutter}
                  alt="Flutter Logo"
                />
                <p className="text-xl font-semibold leading-[30px]">Flutter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img  src={Bg} alt="Bg Image" />
          <img className="absolute top-10 left-10" src={Phone} alt="Phone Img" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
