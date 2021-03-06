import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h1 className="title animate__animated animate__lightSpeedInRight">
        Gifs to you
      </h1>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>

      <footer>
        Made with passion by{" "}
        <span>
          {" "}
          <a href="https://twitter.com/MatiasSalicru">@matiassalicru ♥</a>
        </span>
      </footer>
    </>
  );
};
