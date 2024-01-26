import { FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { TfiFaceSad } from "react-icons/tfi";
import image from "../assets/images/totem1.jpg";

export default function Resources({ link, linkTitle, type }) {
  return (
    <li className=" relative my-2 text-[15px] marker:text-slate-600 sm:text-lg  ">
      {link === "link" ? (
        <a href={`${process.env.PUBLIC_URL} + link`} className="mr-3 " download>
          {!linkTitle ? "Nothing to see here" : linkTitle}
        </a>
      ) : (
        <a href={link} target={"_blank"} className="mr-3 ">
          {!linkTitle ? "Nothing to see here" : linkTitle}
        </a>
      )}

      <span className=" absolute top-1   text-[#3652ad]">
        {type === "video" ? (
          <FaYoutube />
        ) : type === "link" ? (
          <FaDownload />
        ) : (
          <TfiFaceSad className="text-xl  text-black" />
        )}
      </span>
    </li>
  );
}
