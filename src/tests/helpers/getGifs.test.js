import { getGifs } from '../../helpers/getGifs';
import '@testing-library/jest-dom';

describe('Pruebas en getGifs', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('The Office')
        expect(gifs.length ).toBe(20);
    })

    test("Debe de traer 0 elementos", async () => {
      const gifs = await getGifs("");

      expect(gifs.length).toBe(0);
    });

})
