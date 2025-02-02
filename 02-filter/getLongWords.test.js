//Implement saem test defined in 00-imperative/getLongWords.test.js

import {describe, it, expect} from 'vitest';
import getLongWords from './getLongWords';

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];
const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
const EMPTY_ARRAY = [];
const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];

describe("getLongWords", () => {
    it("should return words with length equal or greater than 5 from LANGUAGES", () => {
       
        const result = getLongWords(LANGUAGES);
        
        
        expect(result).toEqual(["JavaScript", "TypeScript"]);
   
    });
  
    it("should return words with length equal or greater than 5 from BEATLES", () => {
        
        const result = getLongWords(BEATLES);
       
       
        expect(result).toEqual(["George", "Ringo"]);
   
    });
  
    it("should handle an empty array", () => {
       
        const result = getLongWords([]);
       
       
        expect(result).toEqual([]);
   
    });
  
    it("should handle an array with no long words", () => {
        
        const result = getLongWords(["cat", "dog", "rat"]);
        
        
        expect(result).toEqual([]);
   
    });
  
    it("should handle an array with all long words", () => {
        
        const result = getLongWords(["python", "javascript", "typescript"]);
        
        
        expect(result).toEqual(["python", "javascript", "typescript"]);
    
    });
  
    it("should handle words with exactly 5 characters", () => {
        
        const result = getLongWords(["three", "house", "mouse"]);
        
        
        expect(result).toEqual(["three", "house", "mouse"]);
    
    });
  });
