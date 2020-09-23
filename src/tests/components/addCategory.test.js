import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto, el input", () => {
    const input = wrapper.find("input");
    const value = "";
    input.simulate("change", {
      target: {
        value,
      },
    });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
