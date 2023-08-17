import { Direction } from '../types/Direction'
import { Position } from '../types/Position'
import { isLetter } from './IsLetter'

export const updateDirection = (map: string[][], currentDirection: Direction, position: Position): Direction => {
  const { x, y } = position
  const currentChar = map[y][x]

  if (currentChar.toLowerCase() === 'x') {
    return currentDirection
  }

  if (currentChar === '+') {
    switch (currentDirection) {
      case 'RIGHT':
      case 'LEFT':
        if (map[y + 1] && (map[y + 1][x] === '|' || isLetter(map[y + 1][x]))) {
          return 'DOWN'
        }
        if (map[y - 1] && (map[y - 1][x] === '|' || isLetter(map[y - 1][x]))) {
          return 'UP'
        }
        break
      case 'DOWN':
      case 'UP':
        if (map[y][x + 1] === '-' || isLetter(map[y][x + 1])) {
          return 'RIGHT'
        }
        if (map[y][x - 1] === '-' || isLetter(map[y][x - 1])) {
          return 'LEFT'
        }
        break
    }
  } else {
    return currentDirection // If not at an intersection, continue in the same direction
  }

  throw new Error(
    `Invalid map: No clear direction at position (${x}, ${y}). Current char: ${currentChar}, Current direction: ${currentDirection}`,
  )
}
