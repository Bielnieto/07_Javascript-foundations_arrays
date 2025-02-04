//Implement saem test defined in 00-imperative/sumNumbersFromInitialValue.test.js

import { describe, it, expect } from 'vitest';
import sumNumbersFromInitialValue from './sumNumbersFromInitialValue.js';

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("sumNumbersFromInitialValue", () => {
  it("should return the correct sum with initial value 0", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsZero);

    // Assert
    expect(result).toBe(0);

  });

  it("should return the correct sum with initial value 10", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsTen);

    // Assert
    expect(result).toBe(10);

  });

  it("should return the initial value if the list is empty", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsOneHundred);

    // Assert
    expect(result).toBe(initialAccumulatedValueAsOneHundred);

  });

  it("should handle negative numbers in the list", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);

    // Assert
    expect(result).toBe(-15);

  });

  it("should handle a mix of positive and negative numbers", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);

    // Assert
    expect(result).toBe(3);

  });

  it("should handle an initial value of 0", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);
    
    // Assert
    expect(result).toBe(3); 

  });

  it("should handle an initial value of 100", () => {
    // Arrange
    // Act
    const result = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsOneHundred);

    // Assert
    expect(result).toBe(115);
    
  });
});
