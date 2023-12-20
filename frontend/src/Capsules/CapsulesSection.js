import React from "react";

export const CapsulesSection = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 justify-center">
      {data &&
        data.map((item) => (
          <div
            className="w-full max-w-sm border-2 border-gray-400 p-4 rounded-md bg-gray-100 hover:bg-gray-300 transition duration-300"
            key={item.capsule_id}
          >
            <h2 className="text-xl font-semibold mb-2">
              {item.capsule_serial}
            </h2>
            <div className="mb-2">
              <strong>Status:</strong> {item.status}
            </div>
            <div className="mb-2">
              <strong>Launch:</strong> {item.original_launch}
            </div>
            <div className="mb-2">
              <strong>Type:</strong> {item.type}
            </div>
            <div className="mb-2">
              <strong>Landings:</strong> {item.landings}
            </div>
            <div>
              <strong>Details:</strong> {item.details}
            </div>
          </div>
        ))}
    </div>
  );
};
