import { Direction } from '../types/Direction'
import { isLetter } from './IsLetter'

export const determineDirectionBasedOnSurroundings = (
  map: string[][],
  currentDirection: Direction,
  x: number,
  y: number,
) => {
  switch (currentDirection) {
    case 'RIGHT':
      if (map[y + 1] && (map[y + 1][x] === '|' || isLetter(map[y + 1][x]))) {
        return 'DOWN'
      }
      if (map[y - 1] && (map[y - 1][x] === '|' || isLetter(map[y - 1][x]))) {
        return 'UP'
      }
      return 'LEFT'
    case 'LEFT':
      if (map[y + 1] && (map[y + 1][x] === '|' || isLetter(map[y + 1][x]))) {
        return 'DOWN'
      }
      if (map[y - 1] && (map[y - 1][x] === '|' || isLetter(map[y - 1][x]))) {
        return 'UP'
      }
      return 'RIGHT'
    case 'DOWN':
      if (map[y][x + 1] === '-' || isLetter(map[y][x + 1])) {
        return 'RIGHT'
      }
      if (map[y][x - 1] === '-' || isLetter(map[y][x - 1])) {
        return 'LEFT'
      }
      return 'UP'
    case 'UP':
      if (map[y][x + 1] === '-' || isLetter(map[y][x + 1])) {
        return 'RIGHT'
      }
      if (map[y][x - 1] === '-' || isLetter(map[y][x - 1])) {
        return 'LEFT'
      }
      return 'DOWN'
  }
}
