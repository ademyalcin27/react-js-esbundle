import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from '@/state/middleware/persist-middleware';

export const store = createStore(reducers, {}, applyMiddleware(persistMiddleware, thunk));
