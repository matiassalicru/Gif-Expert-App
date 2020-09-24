import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas con el gifExpertApp', () => {

    test('Debe de mathchear con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp/>)

        expect(wrapper).toMatchSnapshot();
    })
    

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['The office', 'Friends'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
})
