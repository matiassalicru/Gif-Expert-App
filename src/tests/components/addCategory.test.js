import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Pruebas en el componente", () => {
  const setCategories = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto, el input", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", {
      target: {
        value,
      },
    });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la información on Submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");

    let value = "hello world";

    input.simulate("change", {
      target: {
        value,
      },
    });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1); //Espera que la función sea llamada una sola vez
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Espera que la función sea llamada con una función dentro.

    expect(wrapper.find("input").prop("value")).toBe(""); //Espera que el value que se encuentra dentro del input sea un string vacío.
  });
});
