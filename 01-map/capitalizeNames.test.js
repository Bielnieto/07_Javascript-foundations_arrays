import {describe, it, expect} from 'vitest';
import capitalizeMates from './capitalizeNames';

const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];

describe("capitalizeMates", () => {
    it("should capitalize all names in the array", () => {
        // Arrange
        // Act
        const result = capitalizeMates(NAMES);
        
        // Assert
        expect(result).toEqual(CAPITALIZED_NAMES);

    });

    it("should handle an empty array", () => {
        // Arrange
        // Act
        const result = capitalizeMates(EMPTY_NAMES_LIST);

        // Assert
        expect(result).toEqual([]);

    });

    it("should handle names that are already capitalized correctly", () => {
        // Arrange
        // Act
        const result = capitalizeMates(CAPITALIZED_NAMES);

        // Assert
        expect(result).toEqual(CAPITALIZED_NAMES);

    });

    it("should handle names that are all uppercase", () => {
        // Arrange
        // Act
        const result = capitalizeMates(UPPERCASED_NAMES);

        // Assert
        expect(result).toEqual(CAPITALIZED_NAMES);

    });

    it("should handle names that are all lowercase", () => {
        // Arrange
        // Act
        const result = capitalizeMates(LOWERCASED_NAMES);

        // Assert
        expect(result).toEqual(CAPITALIZED_NAMES);

    });

    it("should handle names with mixed casing", () => {
        // Arrange
        // Act
        const result = capitalizeMates(MIXED_CAPITALIZED_NAMES);

        // Assert
        expect(result).toEqual(CAPITALIZED_NAMES);
        
    });
});
