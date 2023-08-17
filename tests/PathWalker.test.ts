import { PathWalker } from '../index'

describe('A basic example', () => {
  it('should collect letters and determine path for a basic example', () => {
    const map = [
      ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
    ]
    const result = PathWalker(map)
    expect(result.letters).toBe('ACB')
    expect(result.path).toBe('@---A---+|C|+---+|+-B-x')
  })
})

describe('Go straight through intersections', () => {
  it('should collect letters and determine path for a go straight through intersections', () => {
    const map = [
      ['@', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['|', ' ', '+', '-', 'C', '-', '-', '+', ' ', ' '],
      ['A', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' '],
      ['+', '-', '-', '-', 'B', '-', '-', '+', ' ', ' '],
      [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
      [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      [' ', ' ', '+', '-', '-', '-', 'D', '-', '-', '+'],
    ]
    const result = PathWalker(map)
    expect(result.letters).toBe('ABCD')
    expect(result.path).toBe('@|A+---B--+|+--C-+|-||+---D--+|X')
  })
})

describe('Letters may be found on turns', () => {
  it('should collect letters and determine path for: Letters may be found on turns', () => {
    const map = [
      ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      ['x', '-', 'B', '-', '+', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', '+', '-', '-', '-', 'C'],
    ]
    const result = PathWalker(map)
    expect(result.letters).toBe('ACB')
    expect(result.path).toBe('@---A---+|||C---+|+-B-x')
  })
})
