import {describe, it, expect} from 'vitest';
import extractCountriesWithFiveCharactersOrFewer from './extractCountriesWithFiveCharactersOrFewer';

const EMPTY_COUNTRIES_ARRAY = [];
const COUNTRIES_WITH_NO_SHORT_NAMES = ["United Kingdom", "Portugal", "Greece"];
const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];
const COUNTRIES_WITH_MIXED_LENGTH = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

describe("extractCountriesWithFiveCharactersOrFewer", () => {
    it("should return countries with five characters or fewer", () => {
        // Arrange
        // Act
        const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_MIXED_LENGTH);
        
        // Assert
        expect(result).toEqual(["Italy"]);

    });
  
    it("should handle an empty array of countries", () => {
        // Arrange
        // Act
        const result = extractCountriesWithFiveCharactersOrFewer(EMPTY_COUNTRIES_ARRAY);
        
        // Assert
        expect(result).toEqual([]);

    });
  
    it("should handle an array with no countries having five characters or fewer", () => {
        // Arrange
        // Act
        const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_NO_SHORT_NAMES);
        
        // Assert
        expect(result).toEqual([]);

    });
  
    it("should handle an array with all countries having five characters or fewer", () => {
        // Arrange
        // Act
        const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_ALL_SHORT_NAMES);
        
        // Assert
        expect(result).toEqual(COUNTRIES_WITH_ALL_SHORT_NAMES);
    
    });
  });
  