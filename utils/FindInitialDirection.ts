import { Direction } from '../types/Direction'
import { Position } from '../types/Position'
import { isLetter } from './IsLetter'

export const findInitialDirection = (map: string[][], position: Position): Direction => {
  const { x, y } = position

  if (map[y][x + 1] === '-' || isLetter(map[y][x + 1])) return 'RIGHT'
  if (map[y][x - 1] === '-' || isLetter(map[y][x - 1])) return 'LEFT'
  if (map[y + 1] && (map[y + 1][x] === '|' || isLetter(map[y + 1][x]))) return 'DOWN'
  if (map[y - 1] && (map[y - 1][x] === '|' || isLetter(map[y - 1][x]))) return 'UP'

  throw new Error('Invalid map: No clear initial direction')
}
