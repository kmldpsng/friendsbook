import React, { useReducer } from 'react';
import reducer, { initialState } from '../States/reducer';
import Context from '../context';
import PublishMessage from './PublishMessage';
import Messageboard from './MessageBoard';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1> Friends Book</h1>
      <hr />
      <PublishMessage />
      <hr/>
      <Messageboard />
    </Context.Provider>

  );
}

export default App;
