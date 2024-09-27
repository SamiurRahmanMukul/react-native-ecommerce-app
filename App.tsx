/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainRouter from '@routes/MainRouter';
import ProductRouter from '@routes/ProductRouter';
import { ROUTES } from '@utils/constant';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTES.MAIN_ROUTER}>
            <Stack.Screen name={ROUTES.MAIN_ROUTER} component={MainRouter} />
            <Stack.Screen name={ROUTES.PRODUCT_ROUTER} component={ProductRouter} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
