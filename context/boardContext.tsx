import React, { createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { borderValue, childProp } from '../types/contextTypes';

export const BorderProvider = createContext({} as borderValue)
 
const BorderContext = ({children}: childProp) => {
  return (
    <BorderProvider value={{}}>
      {children}
    </BorderProvider>
  );
}

 
export default BorderContext;