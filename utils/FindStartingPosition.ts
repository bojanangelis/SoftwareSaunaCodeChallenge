import { Position } from '../types/Position'

export const findStartPosition = (map: string[][]): Position => {
  for (let y = 0; y < map.length; y++) {
    const row = map[y]
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '@') {
        return { x, y }
      }
    }
  }
  throw new Error('Missing "@" start character')
}
