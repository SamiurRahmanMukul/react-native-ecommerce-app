/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from '@routes/MainRouter';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}

export default App;
