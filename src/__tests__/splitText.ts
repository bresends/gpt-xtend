import { splitText } from '../utils/splitText';

describe('textToChunks', () => {
    it('should split the text into chunks of the specified size', () => {
        const text = 'Hello, world!';
        const chunkSize = 10;
        const expectedChunks = ['Hello,', 'world!'];

        const result = splitText(text, chunkSize);

        expect(result).toEqual(expectedChunks);
    });

    it('should handle empty text', () => {
        const text = '';
        const chunkSize = 3;
        expect(() => splitText(text, chunkSize)).toThrowError('Text is null');
    });

    it('should handle text shorter than the chunk size', () => {
        const text = 'Hi';
        const chunkSize = 5;
        const expectedChunks = ['Hi'];

        const result = splitText(text, chunkSize);

        expect(result).toEqual(expectedChunks);
    });

    it('should handle chunk size greater than text length', () => {
        const text = 'Hello';
        const chunkSize = 10;
        const expectedChunks = ['Hello'];

        const result = splitText(text, chunkSize);

        expect(result).toEqual(expectedChunks);
    });
});
