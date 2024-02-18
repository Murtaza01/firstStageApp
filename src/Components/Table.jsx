import React from "react";
import studentData from "../assets/data/studentsData";

export default function Table({ studentName }) {
  let studentScores;
  if (studentName) {
    const scoreObj = studentData.find((obj) => obj.studentName === studentName);
    const { scores } = scoreObj;
    studentScores = scores;
  }

  return (
    <table
      dir="rtl"
      className="tableStyle mx-auto w-[100%] border-[2px] border-black/70 shadow-xl sm:w-[80%] md:w-[500px]"
    >
      <colgroup>
        <col className="border-[1px] border-black" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan="2" className="text-lg">
            {studentName}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-[1px] border-black ">
          <th>المادة</th>
          <th>السعي (40)</th>
        </tr>
        {studentScores
          ? studentScores.map(({ subject, mark }, index) => {
              return (
                <tr
                  className="border-[1px] border-black text-[16px] "
                  key={index}
                >
                  <td>{subject}</td>
                  {(mark <= 40) & (mark > 20) ? (
                    <td className=" text-green-500">{mark}</td>
                  ) : (mark <= 20) & (mark > 0) ? (
                    <td className=" text-red-400">{mark}</td>
                  ) : (
                    <td className="text-green-500">عفية بلشطور</td>
                  )}
                </tr>
              );
            })
          : undefined}
      </tbody>
    </table>
  );
}
