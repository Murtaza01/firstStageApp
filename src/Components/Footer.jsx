import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="center h-28 flex-col gap-5 bg-[#3652AD] text-white">
      {/* icons container */}
      <div className=" ">
        <ul className=" center gap-4 text-3xl">
          <li>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target={"_blank"}
              className="hover:text-red-400"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/murtaza_alkabie"
              target={"_blank"}
              className="hover:text-sky-500"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murtaza01"
              target={"_blank"}
              className="hover:text-slate-500"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <p>All Copyrights is Reserved to Murtaza Alkabie</p>
    </footer>
  );
}
