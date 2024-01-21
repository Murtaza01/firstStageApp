import React from "react";
import homeBg from "../assets/images/homeBackground.jpg";
import { IoSchoolOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div
      className="backgroundGradient homeItems md:backgroundGradientMD md:homeItemsMD
     min-h-[450px] shadow-xl xl:gap-40 2xl:gap-64"
    >
      <div className="w-56 md:w-80">
        <img className="rounded-full" src={homeBg} alt="" />
      </div>
      <div className=" flex min-h-48 flex-col gap-2 pt-10">
        <div className="flex">
          <h3 className="text-3xl font-semibold ">Welcome Freshman</h3>
          <IoSchoolOutline className="text-3xl text-[#3652ad]" />
        </div>
        <p className="max-w-[500px]  text-lg">
          Congratulations on finishing highschool, you have a better challenge
          now, College, in here you will find some resources for your first year
          in college, don't forget to have fun in the process !
        </p>
      </div>
    </div>
  );
}

// absolute right-72 top-20
