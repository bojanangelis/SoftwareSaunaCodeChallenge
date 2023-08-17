import { Direction } from '../types/Direction'
import { Position } from '../types/Position'

export const getNextPosition = (direction: Direction, position: Position): Position => {
  switch (direction) {
    case 'UP':
      return { x: position.x, y: position.y - 1 }
    case 'DOWN':
      return { x: position.x, y: position.y + 1 }
    case 'LEFT':
      return { x: position.x - 1, y: position.y }
    case 'RIGHT':
      return { x: position.x + 1, y: position.y }
  }
}
