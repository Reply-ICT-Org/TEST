const { add, multiply, isEmpty } = require('./utils');

describe('Utils Module Tests', () => {
  
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 15)).toBe(25);
    });

    test('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-10, 5)).toBe(-5);
    });

    test('should handle zero correctly', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
      expect(add(0, -3)).toBe(-3);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('multiply function', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(5, 6)).toBe(30);
    });

    test('should multiply negative numbers correctly', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should handle zero correctly', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(7, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe('isEmpty function', () => {
    test('should return true for empty strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n')).toBe(true);
    });

    test('should return true for null/undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  test  ')).toBe(false);
      expect(isEmpty('a')).toBe(false);
    });
  });
});