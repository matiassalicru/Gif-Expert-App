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

    if (inputValue.length === 0) {
      settype(true)
    } else {
      if (inputValue.trim().length > 2) {
        setCategories([inputValue]);
        setInputValue("");
      }
    }
    
  };

  const handleError = () =>{

    const div = document.querySelector('#error');

    div.innerHTML = 'Please type something first';

    setTimeout(() => {
      div.innerHTML = '';
    }, 2000);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div id="error"></div>
      {type && 
      handleError()}
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
