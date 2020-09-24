import React from 'react';
const { shallow } = require("enzyme")
const { GifGrid } = require("../../components/GifGrid")


describe('Pruebas de GifGrid', () => {
    test('Debería matchear con el snapshot ', () => {

        const category = 'algo';

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
