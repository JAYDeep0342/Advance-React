import React from 'react';
 import todoReducer from '../features/todo/TodoSlice' 
import { configureStore } from '@reduxjs/toolkit';

  export const store = configureStore({
    reducer: todoReducer
  });