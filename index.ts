import { Direction } from './types/Direction'
import { Position } from './types/Position'
import { findInitialDirection } from './utils/FindInitialDirection'
import { findStartPosition } from './utils/FindStartingPosition'
import { getNextPosition } from './utils/GetNextPosition'
import { isLetter } from './utils/IsLetter'
import { isValidPosition } from './utils/IsValidPosition'
import { updateDirection } from './utils/UpdateDirection'

const PathWalker = (
  map: string[][],
): { letters: string; path: string; direction: Direction; currentPos: Position; currentChar: string } => {
  let currentPos = findStartPosition(map)
  let direction = findInitialDirection(map, currentPos)
  let path = '@'
  let letters = ''

  let currentChar = map[currentPos.y][currentPos.x]
  let nextPos = getNextPosition(direction, currentPos)

  while (currentChar.toLowerCase() !== 'x' && isValidPosition(map, currentPos)) {
    if (currentChar.toLowerCase() === 'x') {
      break
    }

    // Update direction first
    direction = updateDirection(map, direction, currentPos)

    // Move to the next position
    currentPos = getNextPosition(direction, currentPos)
    currentChar = map[currentPos.y][currentPos.x]

    path += currentChar

    if (isLetter(currentChar) && currentChar.toLowerCase() !== 'x') {
      letters += currentChar
    }
    nextPos = getNextPosition(direction, currentPos)
  }

  return {
    letters,
    path,
    direction,
    currentPos,
    currentChar,
  }
}

export { PathWalker }
