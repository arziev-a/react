import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Clear from "@mui/icons-material/Clear";
const SearchBar = ({ func, filteredArr, inputValue, handleClick }) => {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="search for book"
          onChange={func}
          value={inputValue}
        />
        <div className="searchIcon">
          {!inputValue ? <SearchIcon /> : <ClearIcon onClick={handleClick} />}
        </div>
      </div>
      {filteredArr.length > 0 ? (
        <div className="dataResult">
          {filteredArr
            .map((item) => {
              return (
                <a className="dataItem" href={item.link} target="_blank">
                  <p>{item.title}</p>
                </a>
              );
            })
            .slice(0, 10)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
