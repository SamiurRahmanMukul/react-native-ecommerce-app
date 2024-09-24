/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <Text className="text-justify m-2 text-[14px] text-black font-font-poppins-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus amet ratione
            voluptatum, in expedita distinctio. Ad est, atque quam cupiditate earum a, molestiae
            consectetur cum ipsam eligendi quibusdam neque repudiandae?
          </Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
