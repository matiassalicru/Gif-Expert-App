import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "untitulo";
  const url = "https://localhost:3000";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un párrafo con el title", () => {
      const p = wrapper.find('p');

      expect( p.text().trim() ).toBe(title);
  });


  test('Debe de tener la imagen igual al url y alt de las props.', () => {

    const img = wrapper.find('img');

    // console.log(img.props());

    expect( img.prop('src') ).toBe(url);
    expect(img.prop("alt")).toBe(title);
  })

  test('Debe tener la clase Animate_FadeIn', () => {
      const div = wrapper.find("div");

      const className = div.prop("className");

      console.log(className);

       expect(className.includes("animate__fadeIn")).toBe(true);
  })
  
});
