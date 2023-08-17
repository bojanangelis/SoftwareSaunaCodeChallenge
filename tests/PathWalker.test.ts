import { PathWalker } from '../index'

// describe('Path Follower Test -- Beta', () => {
//   it('should collect letters and determine path for a demo example', () => {
//     const map = [
//       ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'C'],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
//     ]
//     const result = PathWalker(map)
//     expect(result.letters).toBe('AC')
//     expect(result.path).toBe('@---A---+||C|X')
//   })
// })

describe('Path Follower Test - A basic example', () => {
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
