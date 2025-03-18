import React, { useState } from "react";
import frute from "./Image/frute.jpg";
const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Grapes"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <img
        src={frute}
        className="  flex top-0 left-0 right-0 bottom-0 w-full h-full object-cover opacity-80"
        alt=""
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />{" "}
      <br />
      <br />
      <table border="2" className="font-extrabold">
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <tr key={index}>
                <td className="">{item}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilter;
