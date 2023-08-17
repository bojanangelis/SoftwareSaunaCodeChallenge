import { Position } from '../types/Position'

export const isValidPosition = (map: string[][], position: Position): boolean => {
  const valid = position.y >= 0 && position.y < map.length && position.x >= 0 && position.x < map[position.y].length
  return valid
}
