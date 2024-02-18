import { useState } from "react";
import Resources from "./Resources";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaBook } from "react-icons/fa";

export default function Class({
  title,
  paragraph,
  instructor,
  image,
  resources,
}) {
  const [accordionToggle, setAccordionToggle] = useState(false);
  function handleClick() {
    setAccordionToggle((toggle) => !toggle);
  }

  let classImage;

  switch (image) {
    case "pronunciationClass":
      classImage = "pronunciationClass";
      break;
    case "grammarClass":
      classImage = "grammarClass";
      break;

    case "literatureClass":
      classImage = "literatureClass";
      break;
    default:
      console.log("No Matching Content");
      break;
  }

  //  Container
  return (
    <div
      onClick={handleClick}
      className={`${classImage} before:accordionBgCover  group relative isolate mx-auto 
         w-11/12 bg-cover bg-center  p-3 text-[17px] font-semibold capitalize
          text-[#E9F6FF] shadow-sm shadow-white/15 hover:cursor-pointer md:text-lg`}
    >
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <p>{instructor}</p>
      <button className="absolute right-4 top-8 text-3xl">
        {!accordionToggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      <div
        className={`${!accordionToggle ? "accordion" : "accordion show"} 
              `}
      >
        <div className=" overflow-hidden ">
          <hr className=" mx-auto my-2 w-[80%] border-[2px] border-black" />
          <span className="center flex gap-2">
            <FaBook className=" text-xl text-[#3652ad]" />
            <h4 className="text-center text-2xl">Resources </h4>
          </span>

          <ul className="list-inside list-disc text-lg font-semibold">
            {/* map over here */}
            {resources.map(({ link, linkTitle, type, id }) => {
              return (
                <Resources
                  key={id}
                  link={link}
                  linkTitle={linkTitle}
                  type={type}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
