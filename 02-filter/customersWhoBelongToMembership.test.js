import {describe, it, expect} from 'vitest';
import customersWhoBelongToMembership from './customersWhoBelongToMembership';

const EMPTY_CUSTOMERS_LIST = [];

const CUSTOMERS_LIST = [
  { name: "Foo", isMember: true },
  { name: "Bar", isMember: false },
  { name: "Fizz", isMember: true },
  { name: "Buzz", isMember: false },
  { name: "FizzBuzz", isMember: true },
];

const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
  { name: "Bar", isMember: false },
  { name: "Buzz", isMember: false },
];

const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
  { name: "Foo", isMember: true },
  { name: "Fizz", isMember: true },
  { name: "FizzBuzz", isMember: true },
];

describe("customersWhoBelongToMembership", () => {
    it("should return only customers who are members", () => {
        // Arrange
        const result = customersWhoBelongToMembership(CUSTOMERS_LIST);
        
        // Act
        const expected = [
            { name: "Foo", isMember: true },
            { name: "Fizz", isMember: true },
            { name: "FizzBuzz", isMember: true },
        ];
        
        // Assert
        expect(result).toEqual(expected);

    });
  
    it("should handle an empty array", () => {
        // Arrange
        // Act
        const result = customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST);
        
        //Assert
        expect(result).toEqual([]);

    });
  
    it("should handle an array with no members", () => {
        // Arrange
        // Act
        const result = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_NO_MEMBERS);
        
        //Assert
        expect(result).toEqual([]);

    });
  
    it("should handle an array with all members", () => {
        // Arrange
        // Act
        const result = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_ALL_MEMBERS);
        
        //Assert
        expect(result).toEqual(CUSTOMERS_LIST_WITH_ALL_MEMBERS);
    
    });
  });
