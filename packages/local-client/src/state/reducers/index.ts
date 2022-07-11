import { combineReducers } from 'redux';
import cellReducers from './cellsReducer';
import bundlesReducer from './bundlesReducer';

const reducers = combineReducers({
    cells: cellReducers,
    bundles: bundlesReducer,
})
export default reducers;

export type RootState = ReturnType<typeof reducers>;