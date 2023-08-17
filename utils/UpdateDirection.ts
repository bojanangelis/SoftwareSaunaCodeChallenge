import { Direction } from '../types/Direction'
import { Position } from '../types/Position'
import { getNextPosition } from './GetNextPosition'
import { isLetter } from './IsLetter'
import { isValidPosition } from './IsValidPosition'

export const updateDirection = (map: string[][], currentDirection: Direction, position: Position): Direction => {
  const { x, y } = position
  const currentChar = map[y][x]

  if (currentChar.toLowerCase() === 'x') {
    return currentDirection
  }

  if (currentChar === '+' || isLetter(currentChar)) {
    const nextPos = getNextPosition(currentDirection, position)
    const nextChar = isValidPosition(map, nextPos) ? map[nextPos.y][nextPos.x] : ' '

    if (isLetter(currentChar) && nextChar === '+') {
      return currentDirection
    }

    const isClearAhead =
      currentDirection === 'LEFT' || currentDirection === 'RIGHT' ? nextChar === '-' : nextChar === '|'

    if (isClearAhead) {
      return currentDirection
    }

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
    return currentDirection // If not at an intersection or a letter, continue in the same direction
  }

  throw new Error(
    `Invalid map: No clear direction at position (${x}, ${y}). Current char: ${currentChar}, Current direction: ${currentDirection}`,
  )
}
