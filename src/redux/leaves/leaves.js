import reduxLeaves from 'redux-leaves';
import initialState from '../initialState';

export const [reducer, actions] = reduxLeaves(initialState)