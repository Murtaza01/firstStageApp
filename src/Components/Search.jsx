import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import studentData from "../assets/data/studentsData";
import HR from "./MiniComponents/HR";
import Table from "./Table";

export default function Search() {
  const input = useRef();
  const [searchedName, setSearchedName] = useState("");

  let name;
  function handleClick(e) {
    e.preventDefault();
    setSearchedName(input.current.value);
  }

  let message = "";
  if (searchedName) {
    studentData.map(({ studentName }) => {
      if (studentName === searchedName) {
        name = studentName;
      } else {
        message =
          "Please Put a Correct Name (your first three names with space)";
      }
    });
  }

  return (
    <div className="min-h-[320px] py-3">
      <div className="flex min-h-[200px] flex-col items-center gap-5">
        <p className="paragraphFont px-6 text-[18px] font-medium text-[#e9f6ff] md:px-32 ">
          Here you can find out your grades, you can either search your{" "}
          <b className="">name </b>
          by using the search bar or <b className="">download </b> the file
          below to view the whole students list and their grades,{" "}
          <span className="">
            please <b>Note</b> that you have to enter your name correctly (first
            three names with space)
          </span>
        </p>
        <form
          onSubmit={handleClick}
          className="paragraphFont flex h-10 w-64 flex-row-reverse items-center justify-around rounded-xl bg-white shadow-md "
        >
          <input
            type="text"
            ref={input}
            className=" bg-transparent text-lg outline-none"
            placeholder="Search"
          />
          <span className=" h-4/6 border-l-[1px] border-black"></span>
          <IoSearchOutline className="cursor-pointer text-2xl" />
        </form>

        {searchedName === name ? (
          <div
            className={`tableTransition mb-5  w-[90%]  text-white ${searchedName === name ? "tableShow" : "hidden opacity-0"}`}
          >
            <Table searchedName={searchedName} studentName={name} />
          </div>
        ) : (
          <p className="mb-3 px-6 text-lg font-semibold text-white">
            {message}
          </p>
        )}
      </div>
      <HR />
      <a href="#">
        <button className="mx-auto  block rounded-lg bg-black px-5 py-1 text-lg text-[#e9f6ff] hover:cursor-pointer hover:bg-black/40 ">
          Download All Marks
        </button>
      </a>
    </div>
  );
}
