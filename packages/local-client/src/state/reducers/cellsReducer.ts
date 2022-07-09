import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell'

interface CellsState  {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
        [key: string]: Cell
    }
}

const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {}
}

const reducer = produce((state: CellsState = initialState, action: Action) => {
    switch(action.type) {
      case ActionType.UPDATE_CELL:
          const { id: payLoadId, content } = action.payload;
          state.data[payLoadId].content = content;
          return state;
      case ActionType.DELETE_CELL:
          delete state.data[action.payload];
          state.order = state.order.filter(id => id !== action.payload);
          return state;
      case ActionType.MOVE_CELL:
          const { direction, id } = action.payload;
          const index = state.order.findIndex((orderId) => orderId === id);
          const targetIndex = direction === 'up' ? index - 1: index + 1;
          
          if (targetIndex < 0 || targetIndex > state.order.length - 1) {
              return state;
          }

          state.order[index] = state.order[targetIndex];
          state.order[targetIndex] = id;

          return state;
      case ActionType.INSERT_CELL_AFTER:
          const cell: Cell = {
              content: '',
              type: action.payload.type,
              id: randomId(), 
          }

          state.data[cell.id] = cell;
          const orderIndex = state.order.findIndex(orderId => orderId === action.payload.id);
          if(orderIndex < 0) {
              state.order.unshift(cell.id);
              return state;
          }

          state.order.splice(orderIndex + 1, 0, cell.id);
          return state;
      default:
        return state;
   }
}, initialState)

const randomId = () => Math.random().toString(36).substring(2,5);
export default reducer