import React, { useEffect, useState } from "react";

function Searchinput({ text, value, onChange, onBlur, name }) {
  const [allData, setAllData] = useState([]);
  const [localValue, setLocalValue] = useState(""); 
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://688b26b82a52cabb9f50597e.mockapi.io/api/searchAPI")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);


  const inputValue = value !== undefined ? value : localValue;

  const results = allData.filter((r) =>
    r.district.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (districtName) => {
    if (onChange) {
      onChange({ target: { name, value: districtName } });
    } else {
      setLocalValue(districtName);
    }
    setShow(false);
  };

  return (
    <div className="relative w-55">
      <input
        name={name}
        className="p-4 bg-white text-black w-full outline-none rounded-md"
        value={inputValue}
        placeholder={text}
        onChange={(e) => {
          if (onChange) {
            onChange(e); 
          } else {
            setLocalValue(e.target.value); 
          }
        }}
        onBlur={onBlur}
        onFocus={() => setShow(true)}
      />
      {show && (
        <div className="absolute top-full left-0 mt-1 border-2 bg-[#7b7b7b] overflow-y-scroll max-h-[100px] w-full">
          {results.length > 0 ? (
            results.map((r) => (
              <span
                key={r.id}
                className="p-1 hover:bg-gray-200 hover:text-black cursor-pointer block"
                onClick={() => handleSelect(r.district)}
              >
                {r.district}
              </span>
            ))
          ) : (
            <span className="block p-1 text-white hover:text-black hover:bg-white">
              No district found
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchinput;


