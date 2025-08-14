
import React, { useEffect, useState } from "react";

function Searchinput({ text }) {
  const [allData, setAllData] = useState([]);
  const [input, setInput] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    fetch("https://688b26b82a52cabb9f50597e.mockapi.io/api/searchAPI")
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);

  const results = allData.filter(r =>
    r.district.toLowerCase().includes(input.toLowerCase())
  );
  const handleevent= (districtName)=>{
    setInput(districtName);
    setshow(false);
  };

  return (
    <div className="relative w-55">
      <div onBlur={()=>setshow(false)}>
      <input
        className="p-4 bg-white text-black w-full outline-none rounded-md"
        value={input}
        placeholder={text}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setshow(true)}
      />

      {show && (<div className="absolute top-full left-0 mt-1 border-2 bg-[#7b7b7b] overflow-y-scroll max-h-[100px] w-full ">
        {results.length > 0 ? (
          results.map(r => (
            <span key={r.id} className="p-1 hover:bg-gray-200 hover:text-black cursor-pointer block" onClick={()=>handleevent(r.district)}>
              {r.district}
            </span>
          ))
        ) : (
          <span className="block p-1 text-white hover:text-black hover:bg-white">No district found</span>
        )}
      </div>
      )}
      </div>
    </div >
  );
}

export default Searchinput;

