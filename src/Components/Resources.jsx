import { FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { TfiFaceSad } from "react-icons/tfi";

export default function Resources({ link, linkTitle, type }) {
  return (
    <li className=" paragraphFont relative my-2 text-[15px] marker:text-black sm:text-[16px] ">
      <a href={link} target="_blank" className="mr-3 ">
        {!linkTitle ? "Nothing to see here" : linkTitle}
      </a>

      <span className=" absolute top-1 ">
        {type === "video" ? (
          <FaYoutube className="text-red-600" />
        ) : type === "link" ? (
          <FaDownload className="text-[#3652ad]" />
        ) : (
          <TfiFaceSad className="text-xl  text-black" />
        )}
      </span>
    </li>
  );
}
