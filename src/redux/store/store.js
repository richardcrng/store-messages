import { configureStore } from 'redux-starter-kit';
import { reducer } from '../leaves';

const store = configureStore({ reducer })

export default store