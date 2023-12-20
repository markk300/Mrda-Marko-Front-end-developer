import React, { useEffect, useState } from "react";
import axios from "axios";
import { CapsulesSection } from "./CapsulesSection";

const URL = "http://localhost:3001/capsules";

export const Capsules = () => {
  const [capsules, setCapsules] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const response = await axios.get(URL);
        setCapsules(response.data);
        console.log("hereee", response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCapsule();
  }, []);
  return (
    <div className="flex-col justify-center bg-slate-200  ">
      <div className="w-[100%] pt-20">
        <input
          className="bg-gray-100 border-2 text-lg mb-5 border-gray-400 focus:outline-none focus:border-blue-500 rounded-full py-2 px-4 w-64 placeholder-gray-500 md:w-[40%] md:text-2xl md:h-16 "
          type="text"
          placeholder="Search by capsule or type"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="">
        <div className="flex justify-center">
          {capsules ? (
            <CapsulesSection
              data={capsules.filter(
                (val) =>
                  val.capsule_serial
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  val.type.toLowerCase().includes(search.toLowerCase())
              )}
            />
          ) : (
            <div className="loader">No CAPSULES</div>
          )}
        </div>
      </div>
    </div>
  );
};
