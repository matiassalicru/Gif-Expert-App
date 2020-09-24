import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
const { useFetchGifs } = require("../../hooks/useFetchGifs")

describe('Pruebas sobre el hook useFetchGif', () => {

    test('Debe de retornar el estado inicial.', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('The Office') );
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    })
    
    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("The Office"));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(20);
        expect(loading).toBeFalsy();

    })
    
})