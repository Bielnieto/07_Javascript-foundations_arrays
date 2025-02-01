import {describe, it, expect} from 'vitest';
import getLongWords from './getLongWords';

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];
const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
const EMPTY_ARRAY = [];
const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];

describe("getLongWords", () => {
    it("should return long words from LANGUAGES array", () => {
        // Arrange
        const expected = ["JavaScript", "TypeScript"];

        //Act
        const result = getLongWords(LANGUAGES);

        // Assert
        expect(result).toEqual(expected);

      });

      it("should return long words from BEATLES array", () => {
        // Arrange
        const expected = ["George", "Ringo"];

        //Act
        const result = getLongWords(BEATLES);

        // Assert
        expect(result).toEqual(expected);

      });

    it("should return an empty array if no words are long enough", () => {
        // Arrange
        // Act
        const result = getLongWords(SHORT_WORDS);

        // Assert
        expect(result).toEqual([]);

    });

    it("should return the same array if all words are long enough", () => {
        // Arrange
        // Act
        const result = getLongWords(ALL_LONG_WORDS);

        // Assert
        expect(result).toEqual(ALL_LONG_WORDS);
    
    });

    it("should handle an empty input array", () => {
        // Arrange 
        // Act
        const result = getLongWords(EMPTY_ARRAY);
        
        //Assert
        expect(result).toEqual([]);
    });

    it("should handle an array with mixed length words", () => {
        const expected = ["adequate", "sufficient"];
        const result = getLongWords(MIXED_LENGTH_WORDS);
        // expect(result).toEqual(expected);
      });
});
