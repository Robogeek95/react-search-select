import { useEffect } from "react";
import { useState } from "react";
import "./CustomSelectWithSearch.css"

function CustomSelectWithSearch({ label, defaultOptions, placeholder }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (defaultOptions) {
      let searchResult = defaultOptions.filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      setOptions(searchResult);
    }
  }, [query, defaultOptions]);

  function handleSearch(e) {
    console.log(e);
    setQuery(e.target.value);
  }

  function handleSelect() {
    let value = document.querySelector(`input[name=${label}]:checked`).value;
    setSelected(value);
    setQuery("");
    setExpanded(false);
  }

  function handleExpand() {
    setExpanded(!expanded);
  }

  return (
    <>
      <div className="container">
        {label && <span>{label}</span>}
        <div onClick={handleExpand}>
          <div className="selected">
            <span>{selected || placeholder}</span>
            <span> &#9660; </span>
          </div>
        </div>

        <div
          className="select-box"
          style={{ display: expanded ? "block" : "none" }}
        >
          <input
            type="text"
            name="search"
            className="search-box"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
          />

          <div className="options-container">
            {options.map((option) => (
              <div key={option} className="option">
                <input
                  type="radio"
                  id={label}
                  name={label}
                  value={option}
                  onChange={() => handleSelect(option)}
                />
                <label for={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      </>
  );
}

export default CustomSelectWithSearch;
