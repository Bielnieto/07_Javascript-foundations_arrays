//Implement saem test defined in 00-imperative/feedMonkeys.test.js

import {describe, it, expect} from 'vitest';
import feedMonkeys from './feedMonkeys';

const { feedMonkeys, MONKEYS } = require("./feedMonkeys");

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];
const apple = "🍎";
const banana = "🍌";
const grape = "🍇";
const specialCharacters = "🍉🍇";

describe("feedMonkeys", () => {
  it("should feed monkeys with bananas", () => {
    // Arrange
    const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, banana);

    //Assert
    expect(result).toEqual(expected);

  });

  it("should feed monkeys with apples", () => {
    // Arrange
    const expected = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, apple);

    //Assert
    expect(result).toEqual(expected);

  });

  it("should feed monkeys with grapes", () => {
    // Arrange
    const expected = ["🐒 🍇", "🦍 🍇", "🦧 🍇"];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, grape);

    //Assert
    expect(result).toEqual(expected);

  });

  it("should return an empty array if no fruit is provided", () => {
    // Arrange
    // Act
    const result = feedMonkeys(MONKEYS_LIST);

    //Assert
    expect(result).toEqual([]);

  });

  it("should handle feeding monkeys with special characters", () => {
    // Arrange
    const expected = ["🐒 🍉🍇", "🦍 🍉🍇", "🦧 🍉🍇"];
    
    // Act
    const result = feedMonkeys(MONKEYS_LIST, specialCharacters);
    
    //Assert
    expect(result).toEqual(expected);
    
  });
});
