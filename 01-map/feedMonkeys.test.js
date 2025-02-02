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
    const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];
    const result = feedMonkeys(MONKEYS_LIST, banana);
    expect(result).toEqual(expected);
  });

  it("should feed monkeys with apples", () => {
    const expected = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];
    const result = feedMonkeys(MONKEYS_LIST, apple);
    expect(result).toEqual(expected);
  });

  it("should feed monkeys with grapes", () => {
    const expected = ["🐒 🍇", "🦍 🍇", "🦧 🍇"];
    const result = feedMonkeys(MONKEYS_LIST, grape);
    expect(result).toEqual(expected);
  });

  it("should return an empty array if no fruit is provided", () => {
    const result = feedMonkeys(MONKEYS_LIST);
    expect(result).toEqual([]);
  });

  it("should handle feeding monkeys with special characters", () => {
    const expected = ["🐒 🍉🍇", "🦍 🍉🍇", "🦧 🍉🍇"];
    const result = feedMonkeys(MONKEYS_LIST, specialCharacters);
    expect(result).toEqual(expected);
  });
});
