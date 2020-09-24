import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
jest.mock("../../hooks/useFetchGifs"); //Simular este archivo.

describe("Pruebas de GifGrid", () => {
  const category = "The Office";

  test("Debería matchear con el snapshot ", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost:algo/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost:algo/cosaasd.jpg",
        title: "Cualquier cosaasdaf",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
 
    expect(wrapper.find('p').exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
