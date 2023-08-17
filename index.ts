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

  const visitedPositions: Position[] = []

  const isVisited = (pos: Position) => {
    return visitedPositions.some((v) => v.x === pos.x && v.y === pos.y)
  }

  while (currentChar.toLowerCase() !== 'x' && isValidPosition(map, currentPos)) {
    // Update direction first
    direction = updateDirection(map, direction, currentPos)

    // Move to the next position
    currentPos = getNextPosition(direction, currentPos)
    currentChar = map[currentPos.y][currentPos.x]

    path += currentChar

    if (isLetter(currentChar) && currentChar.toLowerCase() !== 'x' && !isVisited(currentPos)) {
      letters += currentChar
    }

    visitedPositions.push(currentPos)

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
