import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const [type, settype] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HandleSubmit');
    console.log(inputValue);

    if (inputValue.length < 2) {
      settype(true)
      handleError();
    } else {
      if (inputValue.trim().length >= 2) {
        setCategories(cats=> [inputValue, ...cats]);
        setInputValue("");
      }
    }
    
  };

  const handleError = () =>{

    setTimeout(() => {
      settype(false);
    }, 2000);

  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        placeholder="Search"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      { type &&
        <div id="error">Please type more than one character</div>
      }

    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
