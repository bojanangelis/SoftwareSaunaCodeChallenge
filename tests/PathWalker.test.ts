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

describe('Do not collect a letter from the same location twice', () => {
  it('should collect letters and determine path for Do not collect a letter from the same location twice', () => {
    const map = [
      [' ', ' ', ' ', ' ', '+', '-', 'O', '-', 'N', '-', '+', ' ', ' '],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' '],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '+', '-', 'I', '-', '+'],
      ['@', '-', 'G', '-', 'O', '-', '+', ' ', '|', ' ', '|', ' ', '|'],
      [' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '+', '-', '+', ' ', 'E'],
      [' ', ' ', ' ', ' ', '+', '-', '+', ' ', ' ', ' ', ' ', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ]
    const result = PathWalker(map)
    expect(result.letters).toBe('GOONIES')
    expect(result.path).toBe('@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x')
  })
})

// describe('Keep direction, even in a compact space', () => {
//   it('should collect letters and determine path for Keep direction, even in a compact space', () => {
//     const map = [
//       [' ', '+', '-', 'L', '-', '+', ' ', ' '],
//       [' ', '|', ' ', ' ', '+', 'A', '-', '+'],
//       ['@', 'B', '+', ' ', '+', '+', ' ', 'H'],
//       [' ', '+', '+', ' ', ' ', ' ', ' ', 'X'],
//     ]
//     const result = PathWalker(map)
//     expect(result.letters).toBe('BLAH')
//     expect(result.path).toBe('@B+++B|+-L-+A+++A-+HX')
//   })
// })

describe('Ignore stuff after end of path', () => {
  it('should collect letters and determine path for Ignore stuff after end of path  ', () => {
    const map = [
      ['@', '-', 'A', '-', '-', '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
    ]
    const result = PathWalker(map)
    expect(result.letters).toBe('AB')
    expect(result.path).toBe('@-A--+|+-B--x')
  })
})

describe('Missing start character', () => {
  const containsAtSymbol = (map: string[][]): boolean => {
    return map.some((row) => row.includes('@'))
  }
  it('ERROR --> Missing start character', () => {
    const map = [
      [' ', '-', '-', '-', 'A', '-', '-', '-', '+'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
    ]
    if (!containsAtSymbol(map)) {
      throw new Error('Test map is missing the "@" character.')
    }
  })
})

describe('Missing end character', () => {
  const containsEndSymbol = (map: string[][]): boolean => {
    return map.some((row) => row.includes('x') || row.includes('X'))
  }
  it('ERROR --> Missing end character', () => {
    const map = [
      [' ', '-', '-', '-', 'A', '-', '-', '-', '+'],
      ['@', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      [' ', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
    ]
    if (!containsEndSymbol(map)) {
      throw new Error('Test map is missing the "x" character.')
    }
  })
})
